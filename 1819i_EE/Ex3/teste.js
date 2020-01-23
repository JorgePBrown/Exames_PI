const wacky = nr => () => console.log(nr/3)
wacky.dup = nr => console.log(nr*2)
module.exports = wacky

// wacky(9).dup(3)
// wacky.dup(3)
// wacky(9)
wacky(9)(3)