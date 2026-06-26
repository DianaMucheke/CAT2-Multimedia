/* General page styling */

body{
    margin:0;
    padding:20px;
    font-family:Arial, Helvetica, sans-serif;
    background:#f4f4f4;
    color:#333;
    text-align:center;
}

header{
    margin-bottom:20px;
}

h1{
    color:#2e8b57;
    font-size:2.2rem;
}

main{
    max-width:900px;
    margin:auto;
}

video{
    width:100%;
    max-width:800px;
    height:auto;
    border-radius:10px;
}

.description{
    margin-top:20px;
    font-size:18px;
    line-height:1.6;
}

button{
    margin-top:20px;
    padding:12px 20px;
    font-size:16px;
    background:#2e8b57;
    color:white;
    border:none;
    border-radius:5px;
    cursor:pointer;
}

button:hover{
    background:#246b45;
}

/* Responsive Design */

@media(max-width:768px){

    h1{
        font-size:1.7rem;
    }

    .description{
        font-size:16px;
    }

    button{
        width:100%;
    }

}
