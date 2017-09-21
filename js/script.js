var ludoBtnCrntNmbr
var diceNumber
var cheatDice = null;
var btnDataNumber
var dice
var cutBtn = false;
var btnCounter
var diceNumberEach
var fourPlayer = false
var redblue
var yellowgreen

// --------------------------------RED---------------------

// function red player
function redPlayer() {
    // active red
    $('.redBox .diceBox').parents('.redBox').addClass('activatedOtrBox');
    $('.redBox .diceBox').addClass('activatedBox');
    $('.redBox .diceBox').addClass('onetimePlease');
    $('.redBox .diceBox').parents('.redBox').find(".ludoBtn").addClass('active');
    $('.redBox .diceBox').addClass('enable').removeClass('disabled');

    // After 6 click on Ludo Btn
    $(document).on('click', '.ludoBtn.active', function() {
        $(".diceNumber").html('0')
        $('.redBox .diceBox').removeClass('onetimePlease');

        // Remove Active Class
        $(".ludoBtn-red").removeClass('activeredbtn');

        // Remove Active Class Main Box
        $('.redBox').removeClass('activatedOtrBox');
    });

    // Remove Onetime Please Function For Next Player
    $(".yellowBox .diceNumber").removeClass('onetimePlease');
}
// function red player end

// --------------------------------YELLOW---------------------

// function yellow player
function yellowPlayer() {
    // active yellow
    $('.yellowBox .diceBox').parents('.yellowBox').addClass('activatedOtrBox');
    $('.yellowBox .diceBox').addClass('activatedBox');
    $('.yellowBox .diceBox').addClass('onetimePlease');
    $('.yellowBox .diceBox').parents('.yellowBox').find(".ludoBtn").addClass('active');
    $('.yellowBox .diceBox').addClass('enable').removeClass('disabled');

    // After 6 click on Ludo Btn
    $(document).on('click', '.ludoBtn.active', function() {
        $(".diceNumber").html('0')
        $('.yellowBox .diceBox').removeClass('onetimePlease');

        // Remove Active Class
        $(".ludoBtn-yellow").removeClass('activeyellowbtn');

        // Remove Active Class Main Box
        $('.yellowBox').removeClass('activatedOtrBox');
    });

    // Remove Onetime Please Function For Next Player
    $(".blueBox .diceNumber").removeClass('onetimePlease');
}
// function yellow player

// ---------------------------------BLUE--------------------

// function blue player
function bluePlayer() {
    // active yellow
    $('.blueBox .diceBox').parents('.blueBox').addClass('activatedOtrBox');
    $('.blueBox .diceBox').addClass('activatedBox');
    $('.blueBox .diceBox').addClass('onetimePlease');
    $('.blueBox .diceBox').parents('.blueBox').find(".ludoBtn").addClass('active');
    $('.blueBox .diceBox').addClass('enable').removeClass('disabled');

    // After 6 click on Ludo Btn
    $(document).on('click', '.ludoBtn.active', function() {
        $(".diceNumber").html('0')
        $('.blueBox .diceBox').removeClass('onetimePlease');

        // Remove Active Class
        $(".ludoBtn-blue").removeClass('activebluebtn');

        // Remove Active Class Main Box
        $('.blueBox').removeClass('activatedOtrBox');
    });

    // Remove Onetime Please Function For Next Player
    $(".greenBox .diceNumber").removeClass('onetimePlease');
}
// function blue player

// ---------------------------------GREEN--------------------

// function green player
function greenPlayer() {
    // active yellow
    $('.greenBox .diceBox').parents('.greenBox').addClass('activatedOtrBox');
    $('.greenBox .diceBox').addClass('activatedBox');
    $('.greenBox .diceBox').addClass('onetimePlease');
    $('.greenBox .diceBox').parents('.greenBox').find(".ludoBtn").addClass('active');
    $('.greenBox .diceBox').addClass('enable').removeClass('disabled');

    // After 6 click on Ludo Btn
    $(document).on('click', '.ludoBtn.active', function() {
        $(".diceNumber").html('0')
        $('.greenBox .diceBox').removeClass('onetimePlease');

        // Remove Active Class
        $(".ludoBtn-green").removeClass('activegreenbtn');

        // Remove Active Class Main Box
        $('.greenBox').removeClass('activatedOtrBox');
    });

    // Remove Onetime Please Function For Next Player
    $(".redBox .diceNumber").removeClass('onetimePlease');
}
// function green player

// -----------------------------DICE ANIMATION------------------------

// function dice animation
function diceAnimate() {
    //Add Dice Mask
    $(".diceIcon").append("<div class='dice_mask'></div>"); 

    //After clearing the last points animation
    dice.attr("class", "dice"); 
    dice.css('cursor', 'default');
    
    // Dice Animation
    dice.animate({
        left: '+2px'
    }, 100, function() {
        dice.addClass("dice_t");
    }).delay(200).animate({
        top: '-2px'
    }, 100, function() {
        dice.removeClass("dice_t").addClass("dice_s");
    }).delay(200).animate({
        opacity: 'show'
    }, 600, function() {
        dice.removeClass("dice_s").addClass("dice_e");
    }).delay(100).animate({
        left: '-2px',
        top: '2px'
    }, 100, function() {
        dice.removeClass("dice_e").addClass("dice_" + diceNumber);
        $(this).parents('.boardSection1').find('.diceNumber').html(diceNumber);
        dice.css('cursor', 'pointer');

        //Remove Dice mask
        $(".dice_mask").remove(); 
    });
}
// function dice animation end

// ----------------------------STAR SOUND-------------------------

// function for star sound 
function starSound() {
    if($(".ludoBoardBox > div").parents('.ludoBoardBox').hasClass('star')){
        $("#completed").trigger('play');
        $("#completed").prop("currentTime", 0);
    }  
}
// function for star sound end




$(document).ready(function() {

    // Disable All Player First Time
    $(".diceBox").addClass('disabled');

    // Enable First Player (Red) First Time
    $(".redBox .diceBox").addClass('enable').removeClass('disabled');

    

    $("#bg").trigger('play');
    $("#bg").prop("currentTime", 0);

    $(".options").hide();

    $(".startGame").on('click',function(){
        $(".txt").hide();
        $(".options").fadeIn(800);

        fullscreen();
    })

    $(".choosePlayer").on('click',function(){
        $(".options").hide();
        $(".modalChoosePlayer").fadeIn(800);
    });

    $(".back-mm").on('click',function(){
        $(".options").fadeIn(800);
        $(".modalChoosePlayer").hide();
    });

    $(".playgame").on('click',function(){
        $(".homeScreen").fadeOut(800);
    });

    $('.playerChooseBox input[type="radio"]').click(function(){
        if($("#red-blue-color").is(':checked')){
            redblue = true
            yellowgreen = false,
            console.log('k');
            $(".redBox, .blueBox").addClass('activePlayer');

            $(".yellowBox, .greenBox").addClass('deactivePlayer');

            $(".redBox, .blueBox").removeClass('deactivePlayer');

            $(".yellowBox, .greenBox").removeClass('activePlayer');

            $(".redBox .diceBox").addClass('enable').removeClass('disabled');

            if($(".redBox, .blueBox").hasClass('deactivePlayer')){
                $(".redBox .ludoplrbox span .ludoBtn, .blueBox .ludoplrbox span .ludoBtn, .blueBox .diceBox, .redBox .diceBox").css('opacity', '0');
            } else {
                $(".redBox .ludoplrbox span .ludoBtn, .blueBox .ludoplrbox span .ludoBtn, .blueBox .diceBox, .redBox .diceBox").css('opacity', '1');
            }


            if($(".yellowBox, .greenBox").hasClass('deactivePlayer')){
                $(".yellowBox .ludoplrbox span .ludoBtn, .greenBox .ludoplrbox span .ludoBtn, .greenBox .diceBox, .yellowBox .diceBox").css('opacity', '0');
            } else {
                $(".yellowBox .ludoplrbox span .ludoBtn, .greenBox .ludoplrbox span .ludoBtn, .greenBox .diceBox, .yellowBox .diceBox").css('opacity', '1');
            }

        };
        if($("#yellow-green-color").is(':checked')){
            yellowgreen = true,
            redblue = false
            console.log('k');
            $(".yellowBox, .greenBox").addClass('activePlayer');

            $(".redBox, .blueBox").addClass('deactivePlayer');

            $(".yellowBox, .greenBox").removeClass('deactivePlayer');

            $(".redBox, .blueBox").removeClass('activePlayer');

            $(".redBox .diceBox").addClass('disabled').removeClass('enable');
            $(".yellowBox .diceBox").addClass('enable').removeClass('disabled');


            if($(".redBox, .blueBox").hasClass('deactivePlayer')){
                $(".redBox .ludoplrbox span .ludoBtn, .blueBox .ludoplrbox span .ludoBtn, .blueBox .diceBox, .redBox .diceBox").css('opacity', '0');
            } else {
                $(".redBox .ludoplrbox span .ludoBtn, .blueBox .ludoplrbox span .ludoBtn, .blueBox .diceBox, .redBox .diceBox").css('opacity', '1');
            }


            if($(".yellowBox, .greenBox").hasClass('deactivePlayer')){
                $(".yellowBox .ludoplrbox span .ludoBtn, .greenBox .ludoplrbox span .ludoBtn, .greenBox .diceBox, .yellowBox .diceBox").css('opacity', '0');
            } else {
                $(".yellowBox .ludoplrbox span .ludoBtn, .greenBox .ludoplrbox span .ludoBtn, .greenBox .diceBox, .yellowBox .diceBox").css('opacity', '1');
            }
        };

    });

    $('.multiplayer input[type="radio"]').click(function(){
        if ($("#2").is(':checked')){
            $(".player2").show();
            $(".player4").hide();
            fourPlayer = false
        } else {
            $(".player4").show();
            $(".player2").hide();
            fourPlayer = true
        }

    });



    




    //window.my_mute = false;
    // var abc = true

    // $('.sound').on('click', function(){
    //     if(abc == true) {
    //         $('audio').each(function(){
    //         this.pause(); // Stop playing
    //         this.currentTime = 0; // Reset time

    //     }); 
    //     } else {
    //        $('audio').trigger('play'); 
    //     }
        
    //     abc = false

    // });



    




    //if(fourPlayer === true){
    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------
    // ************************** RED START *************************************
    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------
    // Play Red Dice
    $('.redBox .diceBox').click(function() {

    	btnCounter = false;
    	cutBtn = false;

        // Store Dice Icon
        dice = $(".redBox .dice");

        // Store Dice Random Number
        if(cheatDice){
            diceNumber = cheatDice;
        }else{
            diceNumber = Math.floor(Math.random() * 6 + 1); //random num 1-6
            //diceNumber = setTimeout(function(){ Math.floor(Math.random() * 6 + 1); }, 00);
        }
        
        // Dice Animation
        diceAnimate();


        // Active BTN
        $(".ludoBtn-red").addClass('activeredbtn');


        // Final Steps
        if($('div.redStep[data-red="51"]').find(".ludoBtn-red").length){
            if (diceNumber <= 6){
                $('div.redStep[data-red="51"]').find(".ludoBtn-red").removeClass('newcls');
            } else {
                $('div.redStep[data-red="51"]').find(".ludoBtn-red").addClass('newcls');
                $('div.redStep[data-red="51"]').find(".ludoBtn-red").removeClass('activeredbtn');
            }
        }
        if($('div.redStep[data-red="52"]').find(".ludoBtn-red").length){
            if (diceNumber <= 5){
                $('div.redStep[data-red="52"]').find(".ludoBtn-red").removeClass('newcls');
            } else {
                $('div.redStep[data-red="52"]').find(".ludoBtn-red").addClass('newcls');
                $('div.redStep[data-red="52"]').find(".ludoBtn-red").removeClass('activeredbtn');
            }
        }
        if($('div.redStep[data-red="53"]').find(".ludoBtn-red").length){
            if (diceNumber <= 4){
                $('div.redStep[data-red="53"]').find(".ludoBtn-red").removeClass('newcls');
            } else {
                $('div.redStep[data-red="53"]').find(".ludoBtn-red").addClass('newcls');
                $('div.redStep[data-red="53"]').find(".ludoBtn-red").removeClass('activeredbtn');
            }
        }
        if($('div.redStep[data-red="54"]').find(".ludoBtn-red").length){
            if (diceNumber <= 3){
                $('div.redStep[data-red="54"]').find(".ludoBtn-red").removeClass('newcls');
            } else {
                $('div.redStep[data-red="54"]').find(".ludoBtn-red").addClass('newcls');
                $('div.redStep[data-red="54"]').find(".ludoBtn-red").removeClass('activeredbtn');
            }
        }
        if($('div.redStep[data-red="55"]').find(".ludoBtn-red").length){
            if (diceNumber <= 2){
                $('div.redStep[data-red="55"]').find(".ludoBtn-red").removeClass('newcls');
            } else {
                $('div.redStep[data-red="55"]').find(".ludoBtn-red").addClass('newcls');
                $('div.redStep[data-red="55"]').find(".ludoBtn-red").removeClass('activeredbtn');
            }
        }
        if($('div.redStep[data-red="56"]').find(".ludoBtn-red").length){
            if (diceNumber <= 1){
                $('div.redStep[data-red="56"]').find(".ludoBtn-red").removeClass('newcls');
            } else {
                $('div.redStep[data-red="56"]').find(".ludoBtn-red").addClass('newcls');
                $('div.redStep[data-red="56"]').find(".ludoBtn-red").removeClass('activeredbtn');
            }
        }
        if($('div.redStep[data-red="57"]').find(".ludoBtn-red").length){
            $('div.redStep[data-red="57"]').find(".ludoBtn-red").addClass('newcls');
            $('div.redStep[data-red="57"]').find(".ludoBtn-red").removeClass('activeredbtn');
        } 


        // Find Red Button length
        if($('.redStep').find(".ludoBtn-red").length){
            if($(".ludoBtn-red").hasClass('activeredbtn')){
                btnCounter = false;
            } else if($(".ludoBtn-red").hasClass('activeredbtn') && $(".redBox .ludoBtn").length){
                btnCounter = true;
            } else {
               btnCounter = true;
            }
        }
        


        // Conditions For Dice Numers (if 6)
        if (diceNumber === 6) {
            
            if($(".redBox .ludoBtn").length) {
                btnCounter = false;
                
                redPlayer();                
            }
            if ($(".redBox .ludoBtn").length == 0){
                btnCounter = true;
            }
            

            // Conditions For Running Btns
            $(document).on('click', '.ludoBtn-red', function() {
                $(".redBox .diceBox").addClass('enable').removeClass('disabled');
                if(redblue == true){
                    $(".blueBox .diceBox").addClass('disabled').removeClass('enable');
                } else {
                    $(".yellowBox .diceBox").addClass('disabled').removeClass('enable');
                }
                
                $('.redBox .diceBox').removeClass('onetimePlease');

                // Active BTN Remove
                $(".ludoBtn-red").removeClass('activeredbtn');

                // Remove Active Class
                $(".ludoBtn.active").removeClass('active');

                // Remove Active Class Main Box
                $('.redBox').removeClass('activatedOtrBox');
            });


            // Check final step buttons
            if(btnCounter === true) {
                if($(".ludoBoardBox > .ludoBtn-red").length - $(".redStep .ludoBtn-red").length < 1) {
                    $(".redBox .diceBox").addClass('disabled').removeClass('enable');
                    
                    if(redblue == true){
                        $(".blueBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.blueBox .diceBox').removeClass('onetimePlease');
                    } else {
                        $(".yellowBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.yellowBox .diceBox').removeClass('onetimePlease');
                    }
                    

                    $('.redBox .diceBox').removeClass('onetimePlease');
                }
            }

        } else if ($(".ludoBtn-red").length) {

            // Conditions For Running Btns
            $(document).on('click', '.ludoBtn-red', function() {
                if(cutBtn == false) {
                	$(".redBox .diceBox").addClass('disabled').removeClass('enable');

                    if(redblue == true){
                        $(".blueBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.blueBox .diceBox').removeClass('onetimePlease');
                    } else {
                        $(".yellowBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.yellowBox .diceBox').removeClass('onetimePlease');
                    }
                }
                
                // Remove Active Class
                $(".ludoBtn.active").removeClass('active');
            });

            // Check final step buttons
            if(btnCounter === true) {
            	if($(".ludoBoardBox .ludoBtn-red").length - $(".redStep .ludoBtn-red").length < 1) {
                    console.log("kmf");
            		$(".redBox .diceBox").addClass('disabled').removeClass('enable');
                    if(redblue == true){
                        $(".blueBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.blueBox .diceBox').removeClass('onetimePlease');
                    } else {
                        $(".yellowBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.yellowBox .diceBox').removeClass('onetimePlease');
                    }
                    $('.redBox .diceBox').removeClass('onetimePlease');
            	}
            }

        } else {

            // Conditions For Running Btns
            $(this).addClass('disabled').removeClass('enable');
            if(redblue == true){
                $(".blueBox .diceBox").addClass('enable').removeClass('disabled');
                $('.blueBox .diceBox').removeClass('onetimePlease');
            } else {
                $(".yellowBox .diceBox").addClass('enable').removeClass('disabled');
                $('.yellowBox .diceBox').removeClass('onetimePlease');
            }
            setTimeout(function() {
                $(".redBox .diceNumber").html('0');
            }, 1000);

        } if ($(this).hasClass('activatedBox')) {

            // Conditions For Running Btns (1-5)
            if (diceNumber === 1 || diceNumber === 2 || diceNumber === 3 || diceNumber === 4 || diceNumber === 5) {
                $(".redBox .diceBox").addClass('onetimePlease');

            }
        }
        
    });
    
    // Move Red Button
    $(document).on('click', '.ludoBoardBox .ludoBtn-red', function() {

        diceNumberEach = $(".redBox .diceNumber").text();
        ludoBtnCrntNmbr = $(this).parents('.ludoBoardBox').data("red");
        ludoBtnCrntNmbr += parseInt(diceNumberEach);

        cutBtn = false

        // Cut Buttons
        if($("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').length){
            if($("[data-red ='" + ludoBtnCrntNmbr + "']").children(".ludoBtn-red").length == 0 && $("[data-red ='" + ludoBtnCrntNmbr + "']").hasClass('star')){
                $("#ohho").trigger('play');
                $("#ohho").prop("currentTime", 0);
            }
            if($("[data-red ='" + ludoBtnCrntNmbr + "']").children(".ludoBtn-red, .ludoBtn-red-completed").length || $("[data-red ='" + ludoBtnCrntNmbr + "']").hasClass('star')){

            } else {

                // Cut Only Yellow
                if($("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-yellow-4") {
                    $("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#y4").append('<div class="ludoBtn" data-btnnum="btn-yellow-4"></div>');

                    redPlayer();
                }
                if($("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-yellow-3") {                    
                    $("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#y3").append('<div class="ludoBtn" data-btnnum="btn-yellow-3"></div>');

                    redPlayer();
                }
                if($("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-yellow-2") {                   
                    $("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#y2").append('<div class="ludoBtn" data-btnnum="btn-yellow-2"></div>');

                    redPlayer();
                }
                if($("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-yellow-1") {                    
                    $("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#y1").append('<div class="ludoBtn" data-btnnum="btn-yellow-1"></div>');

                    redPlayer();
                }

                // Cut Only Blue
                if($("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-blue-4") {
                    $("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#b4").append('<div class="ludoBtn" data-btnnum="btn-blue-4"></div>');

                    redPlayer();
                }
                if($("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-blue-3") {                    
                    $("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#b3").append('<div class="ludoBtn" data-btnnum="btn-blue-3"></div>');

                    redPlayer();
                }
                if($("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-blue-2") {                   
                    $("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#b2").append('<div class="ludoBtn" data-btnnum="btn-blue-2"></div>');

                    redPlayer();
                }
                if($("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-blue-1") {                    
                    $("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#b1").append('<div class="ludoBtn" data-btnnum="btn-blue-1"></div>');

                    redPlayer();
                }

                // Cut Only Green
                if($("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-green-4") {
                    $("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#g4").append('<div class="ludoBtn" data-btnnum="btn-green-4"></div>');

                    redPlayer();
                }
                if($("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-green-3") {                    
                    $("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#g3").append('<div class="ludoBtn" data-btnnum="btn-green-3"></div>');

                    redPlayer();
                }
                if($("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-green-2") {                   
                    $("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#g2").append('<div class="ludoBtn" data-btnnum="btn-green-2"></div>');

                    redPlayer();
                }
                if($("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-green-1") {                    
                    $("[data-red ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#g1").append('<div class="ludoBtn" data-btnnum="btn-green-1"></div>');

                    redPlayer();
                }



                cutBtn = true;

                // Cut Sound
                $("#punch").trigger('play');
                $("#punch").prop("currentTime", 0);

            }
        } else {
            cutBtn = false;
        }

        btnDataNumber = $(this).data("btnnum");

        // Move Buttons
        $("[data-red ='" + ludoBtnCrntNmbr + "']").append('<div class="ludoBtn-red" data-btnnum="'+btnDataNumber+'"></div>');

        // Remove Buttons
        $(this).remove();

        // Remove dice numbers
        $(".diceNumber").html('0');

        // Replay if button go to home
        if($('div.redStep[data-red="57"]').find(".ludoBtn-red").length){
            $('div.redStep[data-red="57"]').find(".ludoBtn-red").removeClass('ludoBtn-red').addClass('ludoBtn-red-completed');
            
            cutBtn = true
            if(cutBtn == true) {
                console.log('completed');
                $("#completed").trigger('play');
                $("#completed").prop("currentTime", 0);
            }
            
        } 


        if($('div.redStep[data-red="57"]').find(".ludoBtn-red-completed").length == 4) {
            console.log('win');
            $(".homeScreen").hide();
            $(".win-message").fadeIn(200);

            $("#bg").trigger('pause');
            $("#bg").prop("currentTime", 0);

            setTimeout(function() {
                $('#imgs').fireworks();
            });

            $("#win").trigger('play');
            $("#win").prop("currentTime", 0);

            $(".diceBox").remove();
        }

        // Play Star Sound
        //starSound();
    });
    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------
    // ************************** RED END *************************************
    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------




    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------
    // ************************** YELLOW START *************************************
    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------
    // Play Yellow Dice
    $('.yellowBox .diceBox').click(function() {

        btnCounter = false;
        cutBtn = false;

        // Store Dice Icon
        dice = $(".yellowBox .dice");

        // Store Dice Random Number
        if(cheatDice){
            diceNumber = cheatDice;
        }else{
            diceNumber = Math.floor(Math.random() * 6 + 1); //random num 1-6
        }
        
        // Dice Animation
        diceAnimate();


        // Active BTN
        $(".ludoBtn-yellow").addClass('activeyellowbtn');


        // Final Steps
        if($('div.yellowStep[data-yellow="51"]').find(".ludoBtn-yellow").length){
            if (diceNumber <= 6){
                $('div.yellowStep[data-yellow="51"]').find(".ludoBtn-yellow").removeClass('newcls');
            } else {
                $('div.yellowStep[data-yellow="51"]').find(".ludoBtn-yellow").addClass('newcls');
                $('div.yellowStep[data-yellow="51"]').find(".ludoBtn-yellow").removeClass('activeyellowbtn');
            }
        }
        if($('div.yellowStep[data-yellow="52"]').find(".ludoBtn-yellow").length){
            if (diceNumber <= 5){
                $('div.yellowStep[data-yellow="52"]').find(".ludoBtn-yellow").removeClass('newcls');
            } else {
                $('div.yellowStep[data-yellow="52"]').find(".ludoBtn-yellow").addClass('newcls');
                $('div.yellowStep[data-yellow="52"]').find(".ludoBtn-yellow").removeClass('activeyellowbtn');
            }
        }
        if($('div.yellowStep[data-yellow="53"]').find(".ludoBtn-yellow").length){
            if (diceNumber <= 4){
                $('div.yellowStep[data-yellow="53"]').find(".ludoBtn-yellow").removeClass('newcls');
            } else {
                $('div.yellowStep[data-yellow="53"]').find(".ludoBtn-yellow").addClass('newcls');
                $('div.yellowStep[data-yellow="53"]').find(".ludoBtn-yellow").removeClass('activeyellowbtn');
            }
        }
        if($('div.yellowStep[data-yellow="54"]').find(".ludoBtn-yellow").length){
            if (diceNumber <= 3){
                $('div.yellowStep[data-yellow="54"]').find(".ludoBtn-yellow").removeClass('newcls');
            } else {
                $('div.yellowStep[data-yellow="54"]').find(".ludoBtn-yellow").addClass('newcls');
                $('div.yellowStep[data-yellow="54"]').find(".ludoBtn-yellow").removeClass('activeyellowbtn');
            }
        }
        if($('div.yellowStep[data-yellow="55"]').find(".ludoBtn-yellow").length){
            if (diceNumber <= 2){
                $('div.yellowStep[data-yellow="55"]').find(".ludoBtn-yellow").removeClass('newcls');
            } else {
                $('div.yellowStep[data-yellow="55"]').find(".ludoBtn-yellow").addClass('newcls');
                $('div.yellowStep[data-yellow="55"]').find(".ludoBtn-yellow").removeClass('activeyellowbtn');
            }
        }
        if($('div.yellowStep[data-yellow="56"]').find(".ludoBtn-yellow").length){
            if (diceNumber <= 1){
                $('div.yellowStep[data-yellow="56"]').find(".ludoBtn-yellow").removeClass('newcls');
            } else {
                $('div.yellowStep[data-yellow="56"]').find(".ludoBtn-yellow").addClass('newcls');
                $('div.yellowStep[data-yellow="56"]').find(".ludoBtn-yellow").removeClass('activeyellowbtn');
            }
        }
        if($('div.yellowStep[data-yellow="57"]').find(".ludoBtn-yellow").length){
            $('div.yellowStep[data-yellow="57"]').find(".ludoBtn-yellow").addClass('newcls');
            $('div.yellowStep[data-yellow="57"]').find(".ludoBtn-yellow").removeClass('activeyellowbtn');
        } 


        // Find yellow Button length
        if($('.yellowStep').find(".ludoBtn-yellow").length){
            if($(".ludoBtn-yellow").hasClass('activeyellowbtn')){
                btnCounter = false;
            } else if($(".ludoBtn-yellow").hasClass('activeyellowbtn') && $(".yellowBox .ludoBtn").length){
                btnCounter = true;
            } else {
               btnCounter = true;
            }
        }
        


        // Conditions For Dice Numers (if 6)
        if (diceNumber === 6) {
            
            if($(".yellowBox .ludoBtn").length) {
                btnCounter = false;
                
                yellowPlayer();                
            }
            if ($(".yellowBox .ludoBtn").length == 0){
                btnCounter = true;
            }
            

            // Conditions For Running Btns
            $(document).on('click', '.ludoBtn-yellow', function() {
                $(".yellowBox .diceBox").addClass('enable').removeClass('disabled');
                if(yellowgreen == true){
                    $(".greenBox .diceBox").addClass('disabled').removeClass('enable');
                } else {
                   $(".blueBox .diceBox").addClass('disabled').removeClass('enable'); 
                }
                
                $('.yellowBox .diceBox').removeClass('onetimePlease');

                // Active BTN Remove
                $(".ludoBtn-yellow").removeClass('activeyellowbtn');

                // Remove Active Class
                $(".ludoBtn.active").removeClass('active');

                // Remove Active Class Main Box
                $('.yellowBox').removeClass('activatedOtrBox');
            });


            // Check final step buttons
            if(btnCounter === true) {
                if($(".ludoBoardBox .ludoBtn-yellow").length - $(".yellowStep .ludoBtn-yellow").length < 1) {
                    $(".yellowBox .diceBox").addClass('disabled').removeClass('enable');
                    
                    if(yellowgreen == true){
                        $(".greenBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.greenBox .diceBox').removeClass('onetimePlease');
                    } else {
                        $(".blueBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.blueBox .diceBox').removeClass('onetimePlease');
                    }
                    
                    $('.yellowBox .diceBox').removeClass('onetimePlease');
                }
            }

        } else if ($(".ludoBtn-yellow").length) {

            // Conditions For Running Btns
            $(document).on('click', '.ludoBtn-yellow', function() {
                if(cutBtn == false) {
                    $(".yellowBox .diceBox").addClass('disabled').removeClass('enable');
                    if(yellowgreen == true){
                        $(".greenBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.greenBox .diceBox').removeClass('onetimePlease');
                    } else {
                        $(".blueBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.blueBox .diceBox').removeClass('onetimePlease');
                    }
                    $('.yellowBox .diceBox').removeClass('onetimePlease');
                }
                
                // Remove Active Class
                $(".ludoBtn.active").removeClass('active');
            });

            // Check final step buttons
            if(btnCounter === true) {
                if($(".ludoBoardBox .ludoBtn-blue").length - $(".yellowStep .ludoBtn-blue").length < 1) {
                    console.log("kmf");
                    $(".blueBox .diceBox").addClass('disabled').removeClass('enable');
                    if(yellowgreen == true){
                        $(".greenBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.greenBox .diceBox').removeClass('onetimePlease');
                    } else {
                        $(".blueBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.blueBox .diceBox').removeClass('onetimePlease');
                    }
                    $('.blueBox .diceBox').removeClass('onetimePlease');
                }
            }

        } else {

            // Conditions For Running Btns
            $(this).addClass('disabled').removeClass('enable');
            if(yellowgreen == true){
                $(".greenBox .diceBox").addClass('enable').removeClass('disabled');
                $('.greenBox .diceBox').removeClass('onetimePlease');
            } else {
                $(".blueBox .diceBox").addClass('enable').removeClass('disabled');
                $('.blueBox .diceBox').removeClass('onetimePlease');
            }
            setTimeout(function() {
                $(".yellowBox .diceNumber").html('0');
            }, 1000);

        } if ($(this).hasClass('activatedBox')) {

            // Conditions For Running Btns (1-5)
            if (diceNumber === 1 || diceNumber === 2 || diceNumber === 3 || diceNumber === 4 || diceNumber === 5) {
                $(".yellowBox .diceBox").addClass('onetimePlease');

            }
        }
        
    });
    
    // Move Yellow Button
    $(document).on('click', '.ludoBoardBox .ludoBtn-yellow', function() {

        diceNumberEach = $(".yellowBox .diceNumber").text();
        ludoBtnCrntNmbr = $(this).parents('.ludoBoardBox').data("yellow");
        ludoBtnCrntNmbr += parseInt(diceNumberEach);

        cutBtn = false

        // Cut Buttons
        if($("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').length){
            if($("[data-yellow ='" + ludoBtnCrntNmbr + "']").children(".ludoBtn-yellow").length == 0 && $("[data-yellow ='" + ludoBtnCrntNmbr + "']").hasClass('star')){
                $("#ohho").trigger('play');
                $("#ohho").prop("currentTime", 0);
            }
            if($("[data-yellow ='" + ludoBtnCrntNmbr + "']").children(".ludoBtn-yellow, .ludoBtn-yellow-completed").length || $("[data-yellow ='" + ludoBtnCrntNmbr + "']").hasClass('star')){

            } else {

                // Cut Only Blue
                if($("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-blue-4") {
                    $("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#b4").append('<div class="ludoBtn" data-btnnum="btn-blue-4"></div>');

                    yellowPlayer();
                }
                if($("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-blue-3") {                    
                    $("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#b3").append('<div class="ludoBtn" data-btnnum="btn-blue-3"></div>');

                    yellowPlayer();
                }
                if($("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-blue-2") {                   
                    $("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#b2").append('<div class="ludoBtn" data-btnnum="btn-blue-2"></div>');

                    yellowPlayer();
                }
                if($("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-blue-1") {                    
                    $("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#b1").append('<div class="ludoBtn" data-btnnum="btn-blue-1"></div>');

                    yellowPlayer();
                }

                // Cut Only Green
                if($("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-green-4") {
                    $("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#g4").append('<div class="ludoBtn" data-btnnum="btn-green-4"></div>');

                    yellowPlayer();
                }
                if($("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-green-3") {                    
                    $("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#g3").append('<div class="ludoBtn" data-btnnum="btn-green-3"></div>');

                    yellowPlayer();
                }
                if($("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-green-2") {                   
                    $("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#g2").append('<div class="ludoBtn" data-btnnum="btn-green-2"></div>');

                    yellowPlayer();
                }
                if($("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-green-1") {                    
                    $("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#g1").append('<div class="ludoBtn" data-btnnum="btn-green-1"></div>');

                    yellowPlayer();
                }

                // Cut Only Red
                if($("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-red-4") {
                    $("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#r4").append('<div class="ludoBtn" data-btnnum="btn-red-4"></div>');

                    yellowPlayer();
                }
                if($("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-red-3") {                    
                    $("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#r3").append('<div class="ludoBtn" data-btnnum="btn-red-3"></div>');

                    yellowPlayer();
                }
                if($("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-red-2") {                   
                    $("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#r2").append('<div class="ludoBtn" data-btnnum="btn-red-2"></div>');

                    yellowPlayer();
                }
                if($("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-red-1") {                    
                    $("[data-yellow ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#r1").append('<div class="ludoBtn" data-btnnum="btn-red-1"></div>');

                    yellowPlayer();
                }



                cutBtn = true;

                // Cut Sound
                $("#punch").trigger('play');
                $("#punch").prop("currentTime", 0);

            }
        } else {
            cutBtn = false;
        }

        btnDataNumber = $(this).data("btnnum");

        // Move Buttons
        $("[data-yellow ='" + ludoBtnCrntNmbr + "']").append('<div class="ludoBtn-yellow" data-btnnum="'+btnDataNumber+'"></div>');

        // Remove Buttons
        $(this).remove();

        // Remove dice numbers
        $(".diceNumber").html('0');

        // Replay if button go to home
        if($('div.yellowStep[data-yellow="57"]').find(".ludoBtn-yellow").length){
            $('div.yellowStep[data-yellow="57"]').find(".ludoBtn-yellow").removeClass('ludoBtn-yellow').addClass('ludoBtn-yellow-completed');
            
            cutBtn = true

            if(cutBtn == true) {
                console.log('completed');
                $("#completed").trigger('play');
                $("#completed").prop("currentTime", 0);
            }
        } 

        // Play Star Sound
        //starSound();
    });
    
    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------
    // ************************** YELLOW END *************************************
    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------



    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------
    // ************************** BLUE START *************************************
    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------
    // Play Blue Dice
    $('.blueBox .diceBox').click(function() {

        btnCounter = false;
        cutBtn = false;

        // Store Dice Icon
        dice = $(".blueBox .dice");

        // Store Dice Random Number
        if(cheatDice){
            diceNumber = cheatDice;
        }else{
            diceNumber = Math.floor(Math.random() * 6 + 1); //random num 1-6
        }
        
        // Dice Animation
        diceAnimate();


        // Active BTN
        $(".ludoBtn-blue").addClass('activebluebtn');


        // Final Steps
        if($('div.blueStep[data-blue="51"]').find(".ludoBtn-blue").length){
            if (diceNumber <= 6){
                $('div.blueStep[data-blue="51"]').find(".ludoBtn-blue").removeClass('newcls');
            } else {
                $('div.blueStep[data-blue="51"]').find(".ludoBtn-blue").addClass('newcls');
                $('div.blueStep[data-blue="51"]').find(".ludoBtn-blue").removeClass('activebluebtn');
            }
        }
        if($('div.blueStep[data-blue="52"]').find(".ludoBtn-blue").length){
            if (diceNumber <= 5){
                $('div.blueStep[data-blue="52"]').find(".ludoBtn-blue").removeClass('newcls');
            } else {
                $('div.blueStep[data-blue="52"]').find(".ludoBtn-blue").addClass('newcls');
                $('div.blueStep[data-blue="52"]').find(".ludoBtn-blue").removeClass('activebluebtn');
            }
        }
        if($('div.blueStep[data-blue="53"]').find(".ludoBtn-blue").length){
            if (diceNumber <= 4){
                $('div.blueStep[data-blue="53"]').find(".ludoBtn-blue").removeClass('newcls');
            } else {
                $('div.blueStep[data-blue="53"]').find(".ludoBtn-blue").addClass('newcls');
                $('div.blueStep[data-blue="53"]').find(".ludoBtn-blue").removeClass('activebluebtn');
            }
        }
        if($('div.blueStep[data-blue="54"]').find(".ludoBtn-blue").length){
            if (diceNumber <= 3){
                $('div.blueStep[data-blue="54"]').find(".ludoBtn-blue").removeClass('newcls');
            } else {
                $('div.blueStep[data-blue="54"]').find(".ludoBtn-blue").addClass('newcls');
                $('div.blueStep[data-blue="54"]').find(".ludoBtn-blue").removeClass('activebluebtn');
            }
        }
        if($('div.blueStep[data-blue="55"]').find(".ludoBtn-blue").length){
            if (diceNumber <= 2){
                $('div.blueStep[data-blue="55"]').find(".ludoBtn-blue").removeClass('newcls');
            } else {
                $('div.blueStep[data-blue="55"]').find(".ludoBtn-blue").addClass('newcls');
                $('div.blueStep[data-blue="55"]').find(".ludoBtn-blue").removeClass('activebluebtn');
            }
        }
        if($('div.blueStep[data-blue="56"]').find(".ludoBtn-blue").length){
            if (diceNumber <= 1){
                $('div.blueStep[data-blue="56"]').find(".ludoBtn-blue").removeClass('newcls');
            } else {
                $('div.blueStep[data-blue="56"]').find(".ludoBtn-blue").addClass('newcls');
                $('div.blueStep[data-blue="56"]').find(".ludoBtn-blue").removeClass('activebluebtn');
            }
        }
        if($('div.blueStep[data-blue="57"]').find(".ludoBtn-blue").length){
            $('div.blueStep[data-blue="57"]').find(".ludoBtn-blue").addClass('newcls');
            $('div.blueStep[data-blue="57"]').find(".ludoBtn-blue").removeClass('activebluebtn');


        } 


        // Find blue Button length
        if($('.blueStep').find(".ludoBtn-blue").length){
            if($(".ludoBtn-blue").hasClass('activebluebtn')){
                btnCounter = false;
            } else if($(".ludoBtn-blue").hasClass('activebluebtn') && $(".blueBox .ludoBtn").length){
                btnCounter = true;
            } else {
               btnCounter = true;
            }
        }
        


        // Conditions For Dice Numers (if 6)
        if (diceNumber === 6) {
            
            if($(".blueBox .ludoBtn").length) {
                btnCounter = false;
                
                bluePlayer();                
            }
            if ($(".blueBox .ludoBtn").length == 0){
                btnCounter = true;
            }
            

            // Conditions For Running Btns
            $(document).on('click', '.ludoBtn-blue', function() {
                $(".blueBox .diceBox").addClass('enable').removeClass('disabled');
                if(redblue == true){
                    $(".redBox .diceBox").addClass('disabled').removeClass('enable');
                } else {
                    $(".greenBox .diceBox").addClass('disabled').removeClass('enable');
                }
                $('.blueBox .diceBox').removeClass('onetimePlease');

                // Active BTN Remove
                $(".ludoBtn-blue").removeClass('activebluebtn');

                // Remove Active Class
                $(".ludoBtn.active").removeClass('active');

                // Remove Active Class Main Box
                $('.blueBox').removeClass('activatedOtrBox');
            });


            // Check final step buttons
            if(btnCounter === true) {
                if($(".ludoBoardBox .ludoBtn-blue").length - $(".blueStep .ludoBtn-blue").length < 1) {
                    $(".blueBox .diceBox").addClass('disabled').removeClass('enable');

                    if(redblue == true){
                        $(".redBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.redBox .diceBox').removeClass('onetimePlease');
                    } else {
                        $(".greenBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.greenBox .diceBox').removeClass('onetimePlease');
                    }

                    
                    $('.blueBox .diceBox').removeClass('onetimePlease');
                }
            }

        } else if ($(".ludoBtn-blue").length) {

            // Conditions For Running Btns
            $(document).on('click', '.ludoBtn-blue', function() {
                if(cutBtn == false) {
                    $(".blueBox .diceBox").addClass('disabled').removeClass('enable');
                    if(redblue == true){
                        $(".redBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.redBox .diceBox').removeClass('onetimePlease');
                    } else {
                        $(".greenBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.greenBox .diceBox').removeClass('onetimePlease');
                    }
                }
                
                // Remove Active Class
                $(".ludoBtn.active").removeClass('active');
            });

            // Check final step buttons
            if(btnCounter === true) {
                if($(".ludoBoardBox .ludoBtn-blue").length - $(".blueStep .ludoBtn-blue").length < 1) {
                    console.log("kmf");
                    $(".blueBox .diceBox").addClass('disabled').removeClass('enable');
                    if(redblue == true){
                        $(".redBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.redBox .diceBox').removeClass('onetimePlease');
                    } else {
                        $(".greenBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.greenBox .diceBox').removeClass('onetimePlease');
                    }
                    $('.blueBox .diceBox').removeClass('onetimePlease');
                }
            }

        } else {

            // Conditions For Running Btns
            $(this).addClass('disabled').removeClass('enable');
            if(redblue == true){
                $(".redBox .diceBox").addClass('enable').removeClass('disabled');
                $('.redBox .diceBox').removeClass('onetimePlease');
            } else {
                $(".greenBox .diceBox").addClass('enable').removeClass('disabled');
                $('.greenBox .diceBox').removeClass('onetimePlease');
            }
            setTimeout(function() {
                $(".blueBox .diceNumber").html('0');
            }, 1000);

        } if ($(this).hasClass('activatedBox')) {

            // Conditions For Running Btns (1-5)
            if (diceNumber === 1 || diceNumber === 2 || diceNumber === 3 || diceNumber === 4 || diceNumber === 5) {
                $(".blueBox .diceBox").addClass('onetimePlease');

            }
        }
        
    });
    
    // Move Blue Button
    $(document).on('click', '.ludoBoardBox .ludoBtn-blue', function() {

        diceNumberEach = $(".blueBox .diceNumber").text();
        ludoBtnCrntNmbr = $(this).parents('.ludoBoardBox').data("blue");
        ludoBtnCrntNmbr += parseInt(diceNumberEach);

        cutBtn = false

        // Cut Buttons
        if($("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').length){
            if($("[data-blue ='" + ludoBtnCrntNmbr + "']").children(".ludoBtn-blue").length == 0 && $("[data-blue ='" + ludoBtnCrntNmbr + "']").hasClass('star')){
                $("#ohho").trigger('play');
                $("#ohho").prop("currentTime", 0);
            }
            if($("[data-blue ='" + ludoBtnCrntNmbr + "']").children(".ludoBtn-blue, .ludoBtn-blue-completed").length || $("[data-blue ='" + ludoBtnCrntNmbr + "']").hasClass('star')){

            } else {

                // Cut Only Yellow
                if($("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-yellow-4") {
                    $("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#y4").append('<div class="ludoBtn" data-btnnum="btn-yellow-4"></div>');

                    bluePlayer();
                }
                if($("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-yellow-3") {                    
                    $("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#y3").append('<div class="ludoBtn" data-btnnum="btn-yellow-3"></div>');

                    bluePlayer();
                }
                if($("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-yellow-2") {                   
                    $("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#y2").append('<div class="ludoBtn" data-btnnum="btn-yellow-2"></div>');

                    bluePlayer();
                }
                if($("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-yellow-1") {                    
                    $("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#y1").append('<div class="ludoBtn" data-btnnum="btn-yellow-1"></div>');

                    bluePlayer();
                }

                // Cut Only Green
                if($("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-green-4") {
                    $("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#g4").append('<div class="ludoBtn" data-btnnum="btn-green-4"></div>');

                    bluePlayer();
                }
                if($("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-green-3") {                    
                    $("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#g3").append('<div class="ludoBtn" data-btnnum="btn-green-3"></div>');

                    bluePlayer();
                }
                if($("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-green-2") {                   
                    $("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#g2").append('<div class="ludoBtn" data-btnnum="btn-green-2"></div>');

                    bluePlayer();
                }
                if($("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-green-1") {                    
                    $("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#g1").append('<div class="ludoBtn" data-btnnum="btn-green-1"></div>');

                    bluePlayer();
                }

                // Cut Only Red
                if($("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-red-4") {
                    $("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#r4").append('<div class="ludoBtn" data-btnnum="btn-red-4"></div>');

                    bluePlayer();
                }
                if($("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-red-3") {                    
                    $("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#r3").append('<div class="ludoBtn" data-btnnum="btn-red-3"></div>');

                    bluePlayer();
                }
                if($("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-red-2") {                   
                    $("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#r2").append('<div class="ludoBtn" data-btnnum="btn-red-2"></div>');

                    bluePlayer();
                }
                if($("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-red-1") {                    
                    $("[data-blue ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#r1").append('<div class="ludoBtn" data-btnnum="btn-red-1"></div>');

                    bluePlayer();
                }



                cutBtn = true;

                // Cut Sound
                $("#punch").trigger('play');
                $("#punch").prop("currentTime", 0);

            }
        } else {
            cutBtn = false;
        }

        btnDataNumber = $(this).data("btnnum");

        // Move Buttons
        $("[data-blue ='" + ludoBtnCrntNmbr + "']").append('<div class="ludoBtn-blue" data-btnnum="'+btnDataNumber+'"></div>');

        // Remove Buttons
        $(this).remove();

        // Remove dice numbers
        $(".diceNumber").html('0');

        // Replay if button go to home
        if($('div.blueStep[data-blue="57"]').find(".ludoBtn-blue").length){
            $('div.blueStep[data-blue="57"]').find(".ludoBtn-blue").removeClass('ludoBtn-blue').addClass('ludoBtn-blue-completed');
            
            cutBtn = true

            if(cutBtn == true) {
                console.log('completed');
                $("#completed").trigger('play');
                $("#completed").prop("currentTime", 0);
            }
        } 

        // Play Star Sound
        //starSound();
    });
    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------
    // ************************** BLUE END *************************************
    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------




    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------
    // ************************** GREEN START *************************************
    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------
    // Play Green Dice
    $('.greenBox .diceBox').click(function() {

        btnCounter = false;
        cutBtn = false;

        // Store Dice Icon
        dice = $(".greenBox .dice");

        // Store Dice Random Number
        if(cheatDice){
            diceNumber = cheatDice;
        }else{
            diceNumber = Math.floor(Math.random() * 6 + 1); //random num 1-6
        }
        
        // Dice Animation
        diceAnimate();


        // Active BTN
        $(".ludoBtn-green").addClass('activegreenbtn');


        // Final Steps
        if($('div.greenStep[data-green="51"]').find(".ludoBtn-green").length){
            if (diceNumber <= 6){
                $('div.greenStep[data-green="51"]').find(".ludoBtn-green").removeClass('newcls');
            } else {
                $('div.greenStep[data-green="51"]').find(".ludoBtn-green").addClass('newcls');
                $('div.greenStep[data-green="51"]').find(".ludoBtn-green").removeClass('activegreenbtn');
            }
        }
        if($('div.greenStep[data-green="52"]').find(".ludoBtn-green").length){
            if (diceNumber <= 5){
                $('div.greenStep[data-green="52"]').find(".ludoBtn-green").removeClass('newcls');
            } else {
                $('div.greenStep[data-green="52"]').find(".ludoBtn-green").addClass('newcls');
                $('div.greenStep[data-green="52"]').find(".ludoBtn-green").removeClass('activegreenbtn');
            }
        }
        if($('div.greenStep[data-green="53"]').find(".ludoBtn-green").length){
            if (diceNumber <= 4){
                $('div.greenStep[data-green="53"]').find(".ludoBtn-green").removeClass('newcls');
            } else {
                $('div.greenStep[data-green="53"]').find(".ludoBtn-green").addClass('newcls');
                $('div.greenStep[data-green="53"]').find(".ludoBtn-green").removeClass('activegreenbtn');
            }
        }
        if($('div.greenStep[data-green="54"]').find(".ludoBtn-green").length){
            if (diceNumber <= 3){
                $('div.greenStep[data-green="54"]').find(".ludoBtn-green").removeClass('newcls');
            } else {
                $('div.greenStep[data-green="54"]').find(".ludoBtn-green").addClass('newcls');
                $('div.greenStep[data-green="54"]').find(".ludoBtn-green").removeClass('activegreenbtn');
            }
        }
        if($('div.greenStep[data-green="55"]').find(".ludoBtn-green").length){
            if (diceNumber <= 2){
                $('div.greenStep[data-green="55"]').find(".ludoBtn-green").removeClass('newcls');
            } else {
                $('div.greenStep[data-green="55"]').find(".ludoBtn-green").addClass('newcls');
                $('div.greenStep[data-green="55"]').find(".ludoBtn-green").removeClass('activegreenbtn');
            }
        }
        if($('div.greenStep[data-green="56"]').find(".ludoBtn-green").length){
            if (diceNumber <= 1){
                $('div.greenStep[data-green="56"]').find(".ludoBtn-green").removeClass('newcls');
            } else {
                $('div.greenStep[data-green="56"]').find(".ludoBtn-green").addClass('newcls');
                $('div.greenStep[data-green="56"]').find(".ludoBtn-green").removeClass('activegreenbtn');
            }
        }
        if($('div.greenStep[data-green="57"]').find(".ludoBtn-green").length){
            $('div.greenStep[data-green="57"]').find(".ludoBtn-green").addClass('newcls');
            $('div.greenStep[data-green="57"]').find(".ludoBtn-green").removeClass('activegreenbtn');
        } 


        // Find Yellow Button length
        if($('.greenStep').find(".ludoBtn-green").length){
            if($(".ludoBtn-green").hasClass('activegreenbtn')){
                btnCounter = false;
            } else if($(".ludoBtn-green").hasClass('activegreenbtn') && $(".greenBox .ludoBtn").length){
                btnCounter = true;
            } else {
               btnCounter = true;
            }
        }
        


        // Conditions For Dice Numers (if 6)
        if (diceNumber === 6) {
            
            if($(".greenBox .ludoBtn").length) {
                btnCounter = false;
                
                greenPlayer();                
            }
            if ($(".greenBox .ludoBtn").length == 0){
                btnCounter = true;
            }
            

            // Conditions For Running Btns
            $(document).on('click', '.ludoBtn-green', function() {
                $(".greenBox .diceBox").addClass('enable').removeClass('disabled');
                if(yellowgreen == true){
                    $(".yellowBox .diceBox").addClass('disabled').removeClass('enable');
                } else {
                    $(".redBox .diceBox").addClass('disabled').removeClass('enable');
                }
                
                $('.greenBox .diceBox').removeClass('onetimePlease');

                // Active BTN Remove
                $(".ludoBtn-green").removeClass('activegreenbtn');

                // Remove Active Class
                $(".ludoBtn.active").removeClass('active');

                // Remove Active Class Main Box
                $('.greenBox').removeClass('activatedOtrBox');
            });


            // Check final step buttons
            if(btnCounter === true) {
                if($(".ludoBoardBox .ludoBtn-green").length - $(".greenStep .ludoBtn-green").length < 1) {
                    $(".greenBox .diceBox").addClass('disabled').removeClass('enable');
                    
                    if(yellowgreen == true){
                        $(".yellowBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.yellowBox .diceBox').removeClass('onetimePlease');
                    } else {
                        $(".redBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.redBox .diceBox').removeClass('onetimePlease');
                    }
                    
                    $('.greenBox .diceBox').removeClass('onetimePlease');
                }
            }

        } else if ($(".ludoBtn-green").length) {

            // Conditions For Running Btns
            $(document).on('click', '.ludoBtn-green', function() {
                if(cutBtn == false) {
                    $(".greenBox .diceBox").addClass('disabled').removeClass('enable');
                    if(yellowgreen == true){
                        $(".yellowBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.yellowBox .diceBox').removeClass('onetimePlease');
                    } else {
                        $(".redBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.redBox .diceBox').removeClass('onetimePlease');
                    }
                    $('.redBox .diceBox').removeClass('onetimePlease');
                }
                
                // Remove Active Class
                $(".ludoBtn.active").removeClass('active');
            });

            // Check final step buttons
            if(btnCounter === true) {
                if($(".ludoBoardBox .ludoBtn-green").length - $(".greenStep .ludoBtn-green").length < 1) {
                    console.log("kmf");
                    $(".greenBox .diceBox").addClass('disabled').removeClass('enable');
                    if(yellowgreen == true){
                        $(".yellowBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.yellowBox .diceBox').removeClass('onetimePlease');
                    } else {
                        $(".redBox .diceBox").addClass('enable').removeClass('disabled');
                        $('.redBox .diceBox').removeClass('onetimePlease');
                    }
                    $('.greenBox .diceBox').removeClass('onetimePlease');
                }
            }

        } else {

            // Conditions For Running Btns
            $(this).addClass('disabled').removeClass('enable');
            if(yellowgreen == true){
                $(".yellowBox .diceBox").addClass('enable').removeClass('disabled');
                $('.yellowBox .diceBox').removeClass('onetimePlease');
            } else {
                $(".redBox .diceBox").addClass('enable').removeClass('disabled');
                $('.redBox .diceBox').removeClass('onetimePlease');
            }
            setTimeout(function() {
                $(".greenBox .diceNumber").html('0');
            }, 1000);

        } if ($(this).hasClass('activatedBox')) {

            // Conditions For Running Btns (1-5)
            if (diceNumber === 1 || diceNumber === 2 || diceNumber === 3 || diceNumber === 4 || diceNumber === 5) {
                $(".greenBox .diceBox").addClass('onetimePlease');

            }
        }
        
    });
    
    // Move Green Button
    $(document).on('click', '.ludoBoardBox .ludoBtn-green', function() {

        diceNumberEach = $(".greenBox .diceNumber").text();
        ludoBtnCrntNmbr = $(this).parents('.ludoBoardBox').data("green");
        ludoBtnCrntNmbr += parseInt(diceNumberEach);

        cutBtn = false

        // Cut Buttons
        if($("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').length){
            if($("[data-green ='" + ludoBtnCrntNmbr + "']").children(".ludoBtn-green").length == 0 && $("[data-green ='" + ludoBtnCrntNmbr + "']").hasClass('star')){
                $("#ohho").trigger('play');
                $("#ohho").prop("currentTime", 0);
            }
            if($("[data-green ='" + ludoBtnCrntNmbr + "']").children(".ludoBtn-green, .ludoBtn-green-completed").length || $("[data-green ='" + ludoBtnCrntNmbr + "']").hasClass('star')){

            } else {

                // Cut Only Yellow
                if($("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-yellow-4") {
                    $("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#y4").append('<div class="ludoBtn" data-btnnum="btn-yellow-4"></div>');

                    greenPlayer();
                }
                if($("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-yellow-3") {                    
                    $("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#y3").append('<div class="ludoBtn" data-btnnum="btn-yellow-3"></div>');

                    greenPlayer();
                }
                if($("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-yellow-2") {                   
                    $("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#y2").append('<div class="ludoBtn" data-btnnum="btn-yellow-2"></div>');

                    greenPlayer();
                }
                if($("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-yellow-1") {                    
                    $("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#y1").append('<div class="ludoBtn" data-btnnum="btn-yellow-1"></div>');

                    greenPlayer();
                }

                // Cut Only Blue
                if($("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-blue-4") {
                    $("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#b4").append('<div class="ludoBtn" data-btnnum="btn-blue-4"></div>');

                    greenPlayer();
                }
                if($("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-blue-3") {                    
                    $("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#b3").append('<div class="ludoBtn" data-btnnum="btn-blue-3"></div>');

                    greenPlayer();
                }
                if($("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-blue-2") {                   
                    $("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#b2").append('<div class="ludoBtn" data-btnnum="btn-blue-2"></div>');

                    greenPlayer();
                }
                if($("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-blue-1") {                    
                    $("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#b1").append('<div class="ludoBtn" data-btnnum="btn-blue-1"></div>');

                    greenPlayer();
                }

                // Cut Only Red
                if($("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-red-4") {
                    $("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#r4").append('<div class="ludoBtn" data-btnnum="btn-red-4"></div>');

                    greenPlayer();
                }
                if($("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-red-3") {                    
                    $("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#r3").append('<div class="ludoBtn" data-btnnum="btn-red-3"></div>');

                    greenPlayer();
                }
                if($("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-red-2") {                   
                    $("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#r2").append('<div class="ludoBtn" data-btnnum="btn-red-2"></div>');

                    greenPlayer();
                }
                if($("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').data("btnnum") == "btn-red-1") {                    
                    $("[data-green ='" + ludoBtnCrntNmbr + "']").children('div').remove();
                    $("#r1").append('<div class="ludoBtn" data-btnnum="btn-red-1"></div>');

                    greenPlayer();
                }



                cutBtn = true;

                // Cut Sound
                $("#punch").trigger('play');
                $("#punch").prop("currentTime", 0);

            }
        } else {
            cutBtn = false;
        }

        btnDataNumber = $(this).data("btnnum");

        // Move Buttons
        $("[data-green ='" + ludoBtnCrntNmbr + "']").append('<div class="ludoBtn-green" data-btnnum="'+btnDataNumber+'"></div>');

        // Remove Buttons
        $(this).remove();

        // Remove dice numbers
        $(".diceNumber").html('0');

        // Replay if button go to home
        if($('div.greenStep[data-green="57"]').find(".ludoBtn-green").length){
            $('div.greenStep[data-green="57"]').find(".ludoBtn-green").removeClass('ludoBtn-green').addClass('ludoBtn-green-completed');
            
            cutBtn = true

            if(cutBtn == true) {
                console.log('completed');
                $("#completed").trigger('play');
                $("#completed").prop("currentTime", 0);
            }
        } 

        // Play Star Sound
        //starSound();
    });
    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------
    // ************************** GREEN END *************************************
    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------

    //}




    // Start The Journey (RED)
    $(document).on('click', '.redBox .ludoBtn.active', function() {
        btnDataNumber = $(this).data("btnnum");
        $(this).remove();
        $(".ludoBtn.active").removeClass('active');
        $(".redstartbox").append('<div class="ludoBtn-red" data-btnnum="'+btnDataNumber+'"></div>');      
    });

    // Start The Journey (YELLOW)
    $(document).on('click', '.yellowBox .ludoBtn.active', function() {
        btnDataNumber = $(this).data("btnnum");
        $(this).remove();
        $(".ludoBtn.active").removeClass('active');
        $(".yellowstart").append('<div class="ludoBtn-yellow" data-btnnum="'+btnDataNumber+'"></div>');
    });

    // Start The Journey (BLUE)
    $(document).on('click', '.blueBox .ludoBtn.active', function() {
        btnDataNumber = $(this).data("btnnum");
        $(this).remove();
        $(".ludoBtn.active").removeClass('active');
        $(".bluestartbox").append('<div class="ludoBtn-blue" data-btnnum="'+btnDataNumber+'"></div>');
    });

    // Start The Journey (GREEN)
    $(document).on('click', '.greenBox .ludoBtn.active', function() {
        btnDataNumber = $(this).data("btnnum");
        $(this).remove();
        $(".ludoBtn.active").removeClass('active');
        $(".greenstartbox").append('<div class="ludoBtn-green" data-btnnum="'+btnDataNumber+'"></div>');
    });



    // Play Dice Sound 
    $(document).on('click', '.diceBox', function() {
        $("#audioDiceSoundBible").trigger('play');
        $("#audioDiceSoundBible").prop("currentTime", 0);
    });

    $(document).on('click', '.ludoBtn.active, .ludoBtn-red.activeredbtn, .ludoBtn-yellow.activeyellowbtn, .ludoBtn-blue.activebluebtn, .ludoBtn-green.activegreenbtn', function() {
        $("#btnsound").trigger('play');
        $("#btnsound").prop("currentTime", 0);
    });



    $(window).on('click',function(){
        $(".ludoBoardBox").each(function() {
            if($(this).children('.ludoBtn-red, .ludoBtn-red-completed').length > 1) {
                var abcgf = $(this).children('.ludoBtn-red, .ludoBtn-red-completed').length;
            } else {
                var abcgf = null;
            }
            //console.log(abcgf);
            $(this).children('.ludoBtn-red, .ludoBtn-red-completed').html(abcgf);
        });
    });

    $(window).on('click',function(){
        $(".ludoBoardBox").each(function() {
            if($(this).children('.ludoBtn-yellow, .ludoBtn-yellow-completed').length > 1) {
                var abcgf = $(this).children('.ludoBtn-yellow, .ludoBtn-yellow-completed').length;
            } else {
                var abcgf = null;
            }
            //console.log(abcgf);
            $(this).children('.ludoBtn-yellow, .ludoBtn-yellow-completed').html(abcgf);
        });
    });

    $(window).on('click',function(){
        $(".ludoBoardBox").each(function() {
            if($(this).children('.ludoBtn-blue, .ludoBtn-blue-completed').length > 1) {
                var abcgf = $(this).children('.ludoBtn-blue, .ludoBtn-blue-completed').length;
            } else {
                var abcgf = null;
            }
            //console.log(abcgf);
            $(this).children('.ludoBtn-blue, .ludoBtn-blue-completed').html(abcgf);
        });
    });

    $(window).on('click',function(){
        $(".ludoBoardBox").each(function() {
            if($(this).children('.ludoBtn-green, .ludoBtn-green-completed').length > 1) {
                var abcgf = $(this).children('.ludoBtn-green, .ludoBtn-green-completed').length;
            } else {
                var abcgf = null;
            }
            //console.log(abcgf);
            $(this).children('.ludoBtn-green, .ludoBtn-green-completed').html(abcgf);
        });
    });
    

});

$(window).load(function(){
    // loader
    $("#status").fadeOut();
    $("#preloader").delay(100).fadeOut("slow"); 
});

function fullscreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}
