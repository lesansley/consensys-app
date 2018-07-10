const otaLinks = token => {
  let uri = 'me.uport:me?requestToken=%s%%26callback_type=post'.replace('%s%', token);
  let qrurl = 'http://chart.apis.google.com/chart?cht=qr&chs=400x400&chl=%s%'.replace('%s%', uri);
  let mobileUrl = 'https://id.uport.me/me?requestToken=%s%&callback_type=post'.replace('%s%', token);
  return {
    web: qrurl,
    mobile: mobileUrl
  };
};

export default {
  otaLinks
}
