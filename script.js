// activate strcit mode - helps developers to make accidental errors, bugs
// cretes visible errors in console
//prohibits us from doing certain things
// 'use strict';

let hasDrivingLicense = false;
const passTest = true;

if (passTest) hasDrivingLicense = true;
if (hasDrivingLicense) console.log('Can drive');
