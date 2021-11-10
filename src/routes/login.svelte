<script>
import { onMount } from 'svelte';
    import { auth ,google } from '../db';
   let loggedIn =false;
   let loading = true;
   let user=null;
    /* let email;
    let password; */
    /* async function createAcc(){
        const user=await auth.createUserWithEmailAndPassword(email,password);
        alert("user created")
    }
    async function loginAcc(){
        const user=await auth.signInWithEmailAndPassword(email,password);
        if(user.user.email){
            alert("user exist");
        }
        else{
            alert("user not found");
        }
    } */
    onMount(() =>{
     auth.onAuthStateChanged((u)=>{
     user=u;
     })
});

    async function loginWithGoogle(){
        auth.signInWithPopup(google);
    }
    </script>
{#if !loading}
<p>loading...</p>
{:else}
<div>
    <!-- <input type="text" bind:value={email} placeholder="email"/>
   <input type="text" bind:value={password} placeholder="password"/>
   <div class="req">
       <ul>
           <li>one lowercase letter</li>
           <li>one uppercase letter</li>
           <li>one number</li>
           <li>one special character</li>
           <li>minimum 8 character</li>
       </ul>
   </div>
   <button on:click={createAcc}>Create Account</button> -->
   <button on:click={loginWithGoogle}>Login Account</button>
   {#if loggedIn }
   <button on:click={()=>auth.signOut()}>logout</button>
   <div class="acc">
       <p>{auth.currentUser.displayName}</p>
       <img src={auth.currentUser.photoURL} alt=""/>
   </div>
   {/if}
</div>
{/if}

<style>
   /*  input{
        width :40%;
        margin :10px auto;
        border-radius: 20px;
        border:none;
        padding:10px;
        background-color: rgb(245, 220, 228);
        display:block;
     } */
     button {
         padding: 10px 20px;
         border: none;
         background-color:   #F08080;
         margin: 0 auto;
         margin-top: 10px;
         font-size: medium;
         border: 1px solid #ccc;
         border-radius: 18px;
         text-decoration: none;
         display: block;
         width: 180px;
         color: white;
         cursor: pointer;
     }
    .acc{
         text-align: center;
     }
     /* .req{
         border: none;
         margin:0 auto;
         font-size: medium;
         border-radius: 18px;
         text-decoration: none;
         display: block;
         width: 180px;
         color:rgb(94, 107, 230);
         cursor: pointer;
     } */
</style>
