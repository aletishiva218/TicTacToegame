let game_container = document.querySelector(".container");
        let game_select = document.querySelectorAll(".select");
        let users = document.querySelectorAll(".users div");
        let won_container = document.querySelector(".won-container");
        let players=['Player 1','Player 2'];
        let player_content=document.querySelector(".player");
        let success=document.getElementById("success");
        let over=document.getElementById("over");
        let player1=document.getElementById("player1");
        let player2=document.getElementById("player2");
        let play_again=document.querySelector(".won-container .play-again");
        users[0].classList.toggle("current-player");
        let error=document.getElementById("error");
        let user = 1, won = false;
        let player;
        
        Array.from(game_select).forEach((e, index) => {

            let game_function = () => {
                if (e.innerHTML == '') {
                    if (user % 2) {
                       setTimeout(()=>{player2.play();},100)
                        e.innerHTML = 'X'
                        users[user % 2].classList.toggle("current-player");
                        users[(user + 1) % 2].classList.toggle("current-player");
                    }
                    else {

                        setTimeout(()=>{player1.play();},100)
                        e.innerHTML = 'O'
                        users[user % 2].classList.toggle("current-player");
                        users[(user + 1) % 2].classList.toggle("current-player");
                    }
                    if (
                        ((game_select[0].innerHTML == 'X' && game_select[1].innerHTML == 'X' && game_select[2].innerHTML == 'X') || (game_select[0].innerHTML == 'X' && game_select[3].innerHTML == 'X' && game_select[6].innerHTML == 'X') || (game_select[0].innerHTML == 'X' && game_select[4].innerHTML == 'X' && game_select[8].innerHTML == 'X') || (game_select[1].innerHTML == 'X' && game_select[4].innerHTML == 'X' && game_select[7].innerHTML == 'X') || (game_select[3].innerHTML == 'X' && game_select[4].innerHTML == 'X' && game_select[5].innerHTML == 'X') || (game_select[2].innerHTML == 'X' && game_select[4].innerHTML == 'X' && game_select[6].innerHTML == 'X') || (game_select[6].innerHTML == 'X' && game_select[7].innerHTML == 'X' && game_select[8].innerHTML == 'X') || (game_select[8].innerHTML == 'X' && game_select[2].innerHTML == 'X' && game_select[5].innerHTML == 'X'))
                        ||
                        ((game_select[0].innerHTML == 'O' && game_select[1].innerHTML == 'O' && game_select[2].innerHTML == 'O') || (game_select[0].innerHTML == 'O' && game_select[3].innerHTML == 'O' && game_select[6].innerHTML == 'O') || (game_select[0].innerHTML == 'O' && game_select[4].innerHTML == 'O' && game_select[8].innerHTML == 'O') || (game_select[1].innerHTML == 'O' && game_select[4].innerHTML == 'O' && game_select[7].innerHTML == 'O') || (game_select[3].innerHTML == 'O' && game_select[4].innerHTML == 'O' && game_select[5].innerHTML == 'O') || (game_select[2].innerHTML == 'O' && game_select[4].innerHTML == 'O' && game_select[6].innerHTML == 'O') || (game_select[6].innerHTML == 'O' && game_select[7].innerHTML == 'O' && game_select[8].innerHTML == 'O') || (game_select[8].innerHTML == 'O' && game_select[2].innerHTML == 'O' && game_select[5].innerHTML == 'O'))
                    ) {
                        won = true;
                        player = (user+1) % 2;
                        e.removeEventListener('click', game_function);
                    }
                    else
                        user++;
                }
                else {
                    e.classList.toggle("animation-error");
                    error.play();
                    setTimeout(() => {
                        e.classList.toggle("animation-error");
                       
                    }, 200)
                }
                if (won) {
                    won_container.classList.toggle("won-container-display");
                    player_content.innerHTML=players[player];
                    success.play(); 
                    setTimeout(()=>{
                        player1.pause();
                        player2.pause();
                    },100)
                }
            }
            e.addEventListener('click', game_function);
        })
        play_again.onclick=()=>{
            location.reload();
        }