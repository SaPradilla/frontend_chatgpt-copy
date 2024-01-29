<template>
    <div class="message-skeleton">
        <div class="perfil-skeleton">
            <div class="icon-perfil-skeleton placeholder">
              
            </div>
            <div class="name-skeleton name placeholder">

            </div>
        </div>
        <div class="content-messages-skeleton placeholder content1">

        </div>
        <div class="content-messages-skeleton placeholder content3">
        </div>

       
    </div>
    <div class="message-skeleton">
        <div class="perfil-skeleton">
            <div class="icon-perfil-skeleton placeholder">
               
            </div>
            <div class="name-skeleton name placeholder">

            </div>
        </div>
        <div class="content-messages-skeleton placeholder content">

        </div>
        <div class="code-skeleton code placeholder"></div>
       
    </div>

    <div class="message-skeleton">
        <div class="perfil-skeleton">
            <div class="icon-perfil-skeleton placeholder">
              
            </div>
            <div class="name-skeleton name1 placeholder">

            </div>
        </div>
        <div class="content-messages-skeleton placeholder content1">

        </div>
        <div class="content-messages-skeleton placeholder content2">
        </div>
        <div class="content-messages-skeleton placeholder content3">
        </div>
       
    </div>

    

    <div class="message-skeleton">
        <div class="perfil-skeleton">
            <div class="icon-perfil-skeleton placeholder">
               
            </div>
            <div class="name-skeleton name placeholder">

            </div>
        </div>
        <div class="content-messages-skeleton placeholder content"></div>
        <div class="code-skeleton code2 placeholder"></div>
        
        <div class="content-messages-skeleton placeholder content2"></div>
        <div class="content-messages-skeleton placeholder content5"></div>
    </div>
    <div class="message-skeleton">
        <div class="perfil-skeleton">
            <div class="icon-perfil-skeleton placeholder">
              
            </div>
            <div class="name-skeleton name placeholder">

            </div>
        </div>
        <div class="content-messages-skeleton placeholder content4">

        </div>
        <div class="content-messages-skeleton placeholder content5">
        </div>

       
    </div>
</template>

<style  scoped>
.code-skeleton{
    margin-top: 10px;
    width: 100%;
    margin-bottom: 10px;
    
}
.code{
    height: 200px;
}
.code2{
    
    height: 120px;
}


.message-skeleton{
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.perfil-skeleton{
    display: flex;
    align-items: center;
    gap: 6px;
}
.icon-perfil-skeleton{
    width: 24px;
    height: 24px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.name-skeleton{
    height: 10px;
}
.name{
    width: 60px;
}
.name1{
    width: 30px;
}
.content-messages-skeleton{
    height: 6px;}
.content1,
.content2{
    width: 100%;
}
.content3,
.content4
{
    width: 70%;
}
.content5,
.content{
    width: 50%;
}
.placeholder{
    background: #ccc;
    animation: placeholder 1s linear infinite alternate;

}
@keyframes placeholder {
    0%{

        background-color: hsl(200, 20%, 70%);        
    }
    
    100%{
        background-color: hsl(200, 20%, 95%);        
    }


}
</style>