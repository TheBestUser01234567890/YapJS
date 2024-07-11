// @sub-set YapJS
// @file-name hello-world.yap.js
// @package-name YapJS/Hello-World.Yap.Package
//
// Normal comment goes here

const hello_world = function (alternative_or_default_text = "Hello world!") {
  
  console.log (alternative_or_default_text);
  return alternative_or_default_text;
  
};

hello_world ();
