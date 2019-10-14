//Dropdown: added a border, added filter, made it dropright
//Switch: changed text color
//Slider: changed colors
//Radiobutton: added a bade and changed its color

drop1.onclick=function(){
  let dropSelection = drop1.selection
  lblDrop.value = `You like ${dropSelection}s`
}



switch1.onchange=function(){
  if (switch1.value == true) {
    lblSwitch.value = "Switch is on"
  } else if (switch1.value == false) {
    lblSwitch.value = "Switch is off"
  }
}

sld1_input.onslide = function(){
  let sliderValue = sld1.getValue()
  lblSlider.value = `The slider is at ${sliderValue}%`
}

rb1.onchange=function(){
  let rbValue = ''
  let rbChoice = ''
  rbValue = rb1.value
  switch(rbValue) {
    case 0:
      rbChoice = "pizza"
      break
    case 1:
      rbChoice = "steak"
      break
    case 2:
      rbChoice = "salad"
      break
  }
  lblRB.value = `you like ${rbChoice}`
}
