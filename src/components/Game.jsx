import React, { useEffect , useState} from 'react';

import { game, text } from '../gameLogic/game'; // Импортируйте логику игры
import { colorGenerator } from '../gameLogic/colorGenerator'; // Импортируйте генератор цветов

const Game = (props) => {

  const [resolution, setResolution] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  

  useEffect(() => {
   
    resolution.height -= resolution.height % props.cell;
    resolution.width -= resolution.width % props.cell;
    let colors = colorGenerator();
    let field = game;
    game.setup("canvas", resolution.width, resolution.height, props.cell, colors);
    field.zombieChance = 0.9;
    field.create();
    // field.random();
    field.draw();


    let a = text;
    a.setup("matrix", 
    resolution.width / props.cell, 
    resolution.height / props.cell, 
            "Baskerville");
    let string = "ЭТОПРОЙДЁТ"

    // //create a synth and connect it to the main output (your speakers)
    // const synth =  new Tone.AMSynth(Tone.Synth).toDestination();

    // //play a middle 'C' for the duration of an 8th note
    // synth.triggerAttackRelease("C4", "8n");



    let zombie;
    let index = 0;
    let loop = setInterval(() => {
    
        zombie = field.countZombie();
        // if(zombie > 30){
        // synth.triggerAttackRelease(Math.round(900 / zombie) *  Math.pow(index+1, 1.2), "32n");
        // }
        
        field.zombieChance -= 0.001;
        field.draw();
        field.update();
        if(zombie < 5) {
            
            a.createMatrix(string[index]);
            field.add(0, 0, a);
            field.zombieChance += 0.08;
            console.log(string[index]);
            index++;
            if(index == string.length) {
                index = 0;
            }
        
        
        console.log(Math.round(900 / zombie));

        
        }}, 40); // Каждую секунду
  


        return () => clearInterval(loop);
        

    
    
  }, [resolution]);



  return (
    <div>
       <canvas  class="canvas" id="canvas">wtf?!</canvas>
       <canvas  id="matrix">wtf?!</canvas>
    </div>
  );
};

export default Game;