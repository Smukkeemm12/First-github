const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');
const createCharacterButton = document.getElementById('create-character-btn');
const nameInput = document.getElementById('name-input');
function createCharacter() {
  var kanin = "myImage"; // define and assign a string value to the variable "kanin"
  var img = document.getElementById(kanin);
  img.src = 'sky.jpg';
}


let state = {};

createCharacterButton.addEventListener('click', createCharacter);

function showTextNode(textNodeIndex) {
  let textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  textElement.innerHTML = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

function createCharacter() {
  const name = nameInput.value;
  state = { name };
  showTextNode(1);
}

let textNodes = [
  {
    id: 1,
    text: `Welcome to ${state.name}, Your first mission, assigned by Rennyn Iankrana, is to kill The Violet Spider. Follow the path towards the spider, and when you reach a fork in the road, choose either <span>the right or left path</span>`,
    options: [
      {
  
        text: 'Left',
        setState: { Venstre: true },
        nextText: 2
      },
      {
        text: 'Right',
        nextText: 14
      }
    ]
  },
  {
    id: 2,
    text:'We took the left path and stumbled upon a forsaken woman in need of help. She was injured, and we have a decision to make should <span>we lend a hand, or leave her be?</span>',
    options: [
      {
        text: 'Leaves her be',
        nextText: 23
      },
      
      {
        text: 'Helps her',
        nextText: 3,
        setState: { forsakenHelped: true }
      }
    ]
  },
  {
    id: 3,
    text: ' We decided to lend a hand to the injured forsaken woman by tending to her wound. In return, she gifted us a book revealing the weaknesses of The Violet Spider, which had been causing havoc in her village. She even offered to join us in our journey to defeat the spider. As we moved ahead, we came across a cave. Now, we face a choice: <span>do we venture into the cave or continue on our journey?</span>',
    options: [
      {
        text: 'Continue our journey!',
        nextText: 4
      },
      {
        text: 'Go in',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'We decided to continue our journey to track down The Violet Spider, but after searching for several days, we were unable to locate it. Unfortunately, we ended up lost and without food, facing the possibility of starvation.',
    options: [
      {
        text: 'Restart',
        nextText: 1
      }
    ]
  },
  
  
  {
    id: 6,
    text: 'We chose to explore the cave and stumbled upon The Violet Spider. A battle ensued, and during the fight, it managed to sink its fangs into you, leaving you injured. Now, you must decide whether to <span>continue the fight or flee from the spiders wrath.</span>',
    options: [
      {
        text: 'Escape!',
        nextText: 7
      },
      {
        text:'Keep fighting!',
        nextText: 8
      },
    ]
  },
  {
    id: 7,
    text: 'We dashed out of the cave and stumbled upon Rennyn Lankrana, who had a vision that we were hurt inside the cave. I confessed that The Violet Spider was too strong, and we couldnt complete the mission.Returning to town, I was cast out for betraying the community by failing to slay the spider.',
    options: [
      {
        text: 'Choose to continue traveling out into the world!',
        nextText: 1
      },
      {
        text: 'I have had my adventure, so I will stay outside the gate',
        
        nextText: 1
      },
    ]
  },
  {
    id: 8,
    text: 'You fight with all your might to defeat The Violet Spider and finally succeed. However, the battle leaves you drained, and you collapse unconscious.',
    options: [
      {
        text: 'Click to wake up',
        nextText: 11
      }
    ]
  },
    
  {
    id: 11,
    text: 'You awaken in a church, with Rennyn Lankrana standing by your side. Confused and disoriented, you ask what happened. Rennyn explains that he had a vision of you being injured in the cave and followed you there from town. To his surprise, he found the female Forsaken healing you with her magical powers. Moved by her kindness, Rennyn brought her back to the village to teach others the art of healing. He tells you that you have completed your mission and offers you a reward - a choice between <span> a two-handed axe dealing 15 dmg or a staff with 19 dmg but slower speed.</span>',
    options: [
      {
        text: 'I choose the staff.',
        nextText: 12
      },
      {
        text:'I choose the 2-handed axe ',
        nextText: 13
      }
      
    ]
  },
  {
    id: 12,
    text: 'Are you ready to wield the staff and continue your quest against the terrifying monsters to aid humanity?',
    options:[
      {
        text: 'I would like to continue my journey',
        nextText: 1
     },
     {
      text: 'No, I have had my adventure',
      nextText: 1
     }
      
    ]
  },

  {
    id: 13,
    text: 'Lets see what adventures await us on our journey with the mighty two-handed axe at our side. Are you ready to face any challenge that comes our way?',
    options:[
      {
        text: 'I would like to continue my journey',
        nextText: 1
      },
      {
        text: 'No, I have had my adventure.',
        nextText: 1
      }
    ]

  },
  {
    id: 14,
    text:'You meet an old man on the path who was attacked by some thugs on his way to town. You can choose to <span> help him get back to town,</span> <span>leave him alone</span>, or <span>take action against his attackers.</span>',
    options:[
      {
        text: 'Helps him',
        nextText: 15
      },
      {
        text: 'We leave him be',
        nextText: 16
      },
      {
        text: ' Kills him',
        nextText: 17
      }
    ]
  },
  {
    id: 15,
    text:'After returning to the town and recounting the events to the leader, it was revealed that the elderly man was actually a thief who intended to rob the town of its valuables. As it turns out, his accomplice has followed us into town. We are now without armor and weapons. <span> Are you still up for the journey to face the Violet spider?</span>',
    options:[
        {
          text: 'I would like to continue my journey',
          nextText: 1
        },
        {
          text: 'No, I have had my adventure..',
          nextText: 1
        }
    ]
  
  },
  {
    id: 16,
    text: 'We prioritize our mission over helping a stranger. As we pass by the distressed man, he rises up and stabs us from behind, saying You should learn to respect your fellow human beings. We lay on the ground bleeding to death.',
    options:[
      {
        text:'Start over',
        nextText: 1
      }
    ]
  },
  {
    id: 17,
    text: '"We choose to kill him as we have a mission to fulfill and he should not suffer any longer. A fight to the death ensues as the older man does not give up without a struggle. We emerge victorious and take his belongings before continuing on our journey.',
    options:[
      { 
        text:'We continue our journey towards the Violet Spider',
        nextText: 18

      }
    ]
  },
  {
    id: 18,
    text:'We come across a new road where we see a deep cave. Do we choose <span>to enter the cave</span> or <<span>continue our journey?</span>',
    options:[
      {
        text:'We enter the cave',
        nextText: 19
      },
      {
        text:'We continue our journey',
        nextText: 7
      }
    ]
  },
  {
    id: 19,
    text: 'We have chosen to enter the cave and we encounter The Violet Spider. We engage in a battle where it chooses to bite you - you are injured. Do you choose to continue <span>the fight</span> or <span> do you choose to flee?</span>',
    options: [
      {
        text: 'Keep fighting',
        nextText: 21
      },
      {
        text: 'Escape',
        nextText: 7
      }
    ]
  },
  {
    id:21,
    text: 'You fight with all your strength to kill The Violette Spider, and succeed before passing out.',
    options:[
      {
        text:'Click to Wake up',
        nextText: 22
      }
    ]

  },
  {
    id:22,
    text: 'You wake up in a church where Rennyn Iankrana is standing by your side. You stand up and ask what happened, and Rennyn Lankrana tells you that he had a vision that you were injured inside the cave. He had followed you after you left the town. Rennyn Lankrana tells you that you have completed your mission and that he will give you a reward. You can choose between <span> a two-handed axe with 15 dmg</span> or <span>a staff with 19 dmg but slower attack speed.</span>',
    options:[
      {
        text:'I choose the staff',
        nextText: 12
      },
      {
        text: '"I choose the 2-handeds axe',
        nextText: 13
      }
    ]
  },
  {
    id: 23,
    text: 'After parting ways with her, we stumbled upon a cave. Now, the question is whether we want <span>to explore the cave</span> or <span>keep moving forward on our journey</span>. What do you think?',
    options:[
      {
        text: 'We enter the cave',
        nextText: 19
      },
      {
        text: ' We continue our journey!',
        nextText: 4
      }
    ]
  }
]

function createCharacter() {
  const gender = document.getElementById('gender').value;
  const hairLength = document.getElementById('hair-length').value;
  const charClass = document.getElementById('class').value;
  const name = document.getElementById('name-input').value;
  document.getElementById('character-creation').style.display = 'none';
  document.getElementById('create-character-btn').style.display = 'none';

  // show the image container
  document.getElementById('image-container').style.display = 'block';
  const characterImage = document.getElementById('image-container');

  state = { gender, hairLength, class: charClass, name };
  
  
  // Update textNodes with the name variable
  textNodes[0].text = `Welcome to ${state.name}, ${state.class} Your first mission, assigned by Rennyn Iankrana, is to kill The Violet Spider. Follow the path towards the spider, and when you reach a fork in the road, choose either <span>the right or left path</span>`;
  document.getElementById('character-creation').classList.add('hidden');
  textElement.classList.remove('hidden');
  optionButtonsElement.classList.remove('hidden');
  
  showTextNode(1);
}