const isFoodChicken = function(kind,internalTemp, doneness){
  return kind === "chicken" ? console.log("yes it's chicken") : console.log("no that's not chicken")
}

isFoodChicken("chicken")
isFoodChicken("beef")


// switch statement

let ideaTemp = 0
const getIdealBeefTemp = (doneness) => {
  let idealTemp;
  switch (doneness) {
  case 'rare':
  idealTemp = 125;
  break;
  case 'medium':
  idealTemp = 135;
  break;
  case 'medium-well':
  idealTemp = 145;
  break;
  default:
  idealTemp = 155; // default is well done
  }
 return idealTemp;
}

getIdealBeefTemp('rare')

// switch with fallthrough
const getFruitColor = (fruit) => {
  let color;
  switch (fruit) {
  case 'banana':
  case 'lemon':  // this works like an OR statement
  color = 'yellow';
  console.log("yellow")
  break;
  case ('kiwi' || 'lime'): //could also do the OR statement like this
  color = 'green';
  console.log('green')
  break;
  default:
  color = 'Dunno';
  }
  return color;
};

getFruitColor('kiwi')


const gatoradeFlavors = {
  blue: 'Glacier Freeze',
  yellow: 'Lemon',
  red: 'Fruit Punch',
  orange: 'Melon'
  };
  // could work like a switch
  const getFlavor = (color) => {
  return gatoradeFlavors[color] 
  ? console.log(gatoradeFlavors[color]) 
  : console.log('Not sure');
  };

  getFlavor("p")

  


  for (let i = 0; i < 10; i++)
    console.log(i)