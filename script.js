/*JS Document */

/* Objetivo: interatividade no botão */
/*Declaração das variáveis*/
var a;
var b;

/*Entrada de dados*/
    /* PRIMEIRO BOTAO */
    /*Relacionar qual botão */
    a=document.getElementsByClassName('f_botao')[0];
    
/*Saída de dados*/
    /*Adicionar evento aos botões */
    a.addEventListener('mouseenter',entrar)
    a.addEventListener('mouseout',sair)
    a.addEventListener('touchend',sair)
    a.addEventListener('click',inserir)

    function entrar(){
        a.style.background='green';
        a.value='INSERIR';
    };
    
    function sair(){
        a.style.background='black';
        a.style.color='white';
        a.value='INSERIR';
    };

    /* OBJETIVO: INSERIR ELEMENTO DOM */
    /*Declarar variáveis*/
    var tarefa;
    var lista_tarefas;
    var texto;
    var n=0;

    /*Entrada de dados*/
   
    //invalidar campo vazio

    function inserir(){
        
        texto=document.getElementById('texto_usuario').value;

        
        if(texto !== ""){      
        a.style.background='gray';
        a.value='INSERIDO';


        tarefa=document.createElement('li'); //qual tipo de elemento
        tarefa.className='tarefa';// qual class do elemento
        tarefa.innerText=texto;//qual texto do elemento

        lista_tarefas=document.getElementById('f_lista') //em qual pai

        /*Saída de dados*/
        lista_tarefas.appendChild(tarefa); //inserir


        document.getElementById('texto_usuario').value="";//esvaziar campo de texto
        }

    else{
        window.alert('Inserir tarefa!')
        }
        
     }
    /*OBJETIVO: Quando clicar Enter, inserir tarefa */
    var input_text;

    input_text=document.getElementById('texto_usuario')
    input_text.addEventListener('keydown',clicou_enter)

    function clicou_enter(tecla){
        if(tecla.key =='Enter'){
            inserir();
        }
    }
    

        /*SEGUNDO BOTAO*/
        /*Relacionar qual botão*/
        b=document.getElementsByClassName('f_botao')[1];

        /*Saída de dados*/
            /*Adicionar eventos aos botão */
        b.addEventListener('click', clicar2)
        b.addEventListener('mouseenter',entrar2)
        b.addEventListener('mouseout',sair2)
        

        function entrar2(){
            b.style.background='red';
            b.value='EXCLUIR';
        }
        function sair2(){
            b.style.background='blacK';
            b.value='EXCLUIR'
        }
        /*EXCLUIR ELEMENTO DOM */
        function clicar2(){
            b.style.background='red';
            b.value='SELECIONE';
      
        /*SELECIONAR ELEMENTO DOM */
        
        var selecionado;
        var listaItens;

        listaItens=document.getElementsByTagName('li');

        for(var selecionado =0 ; selecionado <listaItens.length;selecionado++){
            listaItens[selecionado].addEventListener('click',excluir_selecionado);            
        }

        
        function excluir_selecionado(){
        

        this.parentNode.removeChild(this);
        }
    }
        
        
        