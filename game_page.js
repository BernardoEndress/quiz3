player1=localStorage.getItem("player1name");
player2=localStorage.getItem("player2name");
player1score=0;
player2score=0;
document.getElementById("player1Name").innerHTML=player1+": ";
document.getElementById("player2Name").innerHTML=player2+": ";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerQuestion").innerHTML="turno da pergunta: "+player1;
document.getElementById("playerAnswer").innerHTML="turno da resposta: "+player2;

function send(){
    number1=document.getElementById("numero1").value;
    number2=document.getElementById("numero2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    question_number="<h4>"+number1+" * "+number2+"</h4>";
input_box="<br>Resposta: <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclick()'>Checar</button>";
row=question_number+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("numero1").value="";
document.getElementById("numero2").value="";
}

question_turn="player1";
answer_turn="player2";

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_answer)
    {
        if(answer_turn=="player1")
        {
            player1score=player1score +1;
            document.getElementById("player1score").innerHTML=player1_score;
        }
        else
        {
            player2score=player2score +1;
            document.getElementById("player2score").innerHTML=player1_score;
        }
    }
    if(question_turn=="player1")
    {
        question_turn="player2"
        document.getElementById("playerQuestion").innerHTML="Question turn-"+player2;
    }
    else
    {
        question_turn="player1"
        document.getElementById("playerQuestion").innerHTML="Question turn-"+player1;
    }
    if(answer_turn=="player1")
    {
        answer_turn="player2"
        document.getElementById("playerAnswer").innerHTML="answer turn-" + player1;
    }
    else
    {
        answer_turn="player1"
        document.getElementById("playerAnswer").innerHTML="answer turn-" + player2;
    }
    document.getElementById("output").innerHTML="";
}