function getRepository(){
    return new Promise((resolve, reject) =>{
        let inputName = document.querySelector('#name');
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.github.com/users/${inputName.value}/repos`)
        xhr.send(null);

        inputName.value = '';

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }else{
                    reject('[ERROR] User not fund');
                }
            }
        }
    });
}

async function toCharge(){
    try{
        const response = await getRepository();
        let toCharge = document.querySelector('#resposta');
        let ulElement = document.querySelector('#resposta ul');

        createFeedBackLoad();
        createFeedBack();
        clearLi();

        response.map((dados)=>{

            setTimeout(() => {
                let liElement = document.createElement('li');
                liElement.innerText = `${dados.name}`;
                ulElement.appendChild(liElement);
                toCharge.appendChild(ulElement);
            }, 2000);
        });
    }catch(err){
        alert(err);
    }
}

function createFeedBackLoad(){
    let toCharge = document.querySelector('#resposta #title');
    let h1Title = document.createElement('h1');
    let text02 = document.createTextNode('Buscando..');
    let selectH1 = document.querySelectorAll('#title h1');

    if(selectH1.length > 0){
        toCharge.innerHTML = '';
    }

    h1Title.appendChild(text02);
    toCharge.appendChild(h1Title); 
}

function createFeedBack(){
    let toCharge = document.querySelector('#resposta #title');
    let h1Title = document.createElement('h1');
    let selectH1 = document.querySelectorAll('#title h1');
    let text = document.createTextNode('Repositórios:');

    setTimeout(() => {
        if(selectH1.length > 0){
            toCharge.innerHTML = '';
        }
    
        h1Title.appendChild(text);
        toCharge.appendChild(h1Title);
        
    }, 2000);
}

function clearLi(){
    let ulElement = document.querySelector('#resposta ul');
    let liCliear = document.querySelectorAll('#resposta ul li');

    if(liCliear.length > 0){
        ulElement.innerText = '';
    }
}