function trackFacebookVisitor(cb) {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const rf = document.referrer;
  
  const isFacebookApp = (ua.indexOf('FBAN') > -1) || (ua.indexOf('FBAV') > -1);
  const isFacebook = rf.indexOf('facebook') > -1;
  const isInstagramApp = ua.indexOf('Instagram') > -1;
  const isInstagram = rf.indexOf('instagram') > -1;
  
  if (isFacebook) return cb('facebook-web');
  if (isFacebookApp) return cb('facebook-app');
  if (isInstagram) return cb('instagram-web'); 
  if (isInstagramApp) return cb('instagram-app');
  return cb(undefined);
}