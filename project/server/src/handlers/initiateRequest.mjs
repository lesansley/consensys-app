import urljoin from 'url-join';
import joi from 'joi';

import connectors from '../config/connectors';
import config from '../config/config';
import otaComm from '../utils/otaComm';
import addRequest from '../database/addRequest';

const uportConn = connectors.uportConn;

const schema = joi.object().keys({
  type: joi
    .any()
    .valid('request', 'verify')
    .required(),
  attributes: joi
    .array()
    .items(joi.string())
    .required(),
  exp: joi.number()
});

// prettier-ignore
/**
 * To initiate the request for user credentials
 *
 * @method initiateRequest
 * @param {object} options
 * 	@param {string} type request || verify
 *	@param {array} attributes Array of attributes requested from the user e.g.['First name', 'Last name', 'Birth date']
 *	@param {number} [exp] Value in seconds until the request expires (default === 300)
 * @returns {object} e.g. { web: 'http://chart.apis.google.com/chart?cht=qr&chs=400x400&chl=me.uport:me?requestToken=<token>%26callback_type=post',
														mobile: 'https://id.uport.me/me?requestToken=<token>&callback_type=post',
														ref: 'a0qoti6zku9rxji'
                          }
 */

const initiateRequest = async (options) => {
	try {
		joi.assert(options, schema, 'Invalid options object');
	} catch (err) {
		return err;
	}

	const ref = randomstring.generate({
		length: 16,
		charset: 'alphanumeric',
		capitalization: 'lowercase'
	});
	const now = Math.floor(new Date().getTime() / 1000);
	const exp = options.exp ? now + options.exp : now + 300;
	const request = {
		[options.type]: options.attributes,
		callbackUrl: urljoin(config.apiRootUrl, 'callback', ref),
		exp
	};
	const token = await uportConn.createRequest(request);
	try {
		await addRequest(ref, options.exp * 1000);
		return otaComm(token);
	} catch (err) {
		return err;
	}
};

export default initiateRequest;
