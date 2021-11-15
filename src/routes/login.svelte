<script>
    import { auth ,google } from '../db';
    
   let loggedIn =false;
   let user;
  
    async function loginWithGoogle(){
        auth.signInWithPopup(google);
        loggedIn=true;
    }
    async function logout(){
        auth.signOut();
    }
    
    </script>

<div >
    {#if user}
        loggedIn in as {user.uid}
    {:else}
        <button on:click={loginWithGoogle}>Sign In with google</button>
        {#if loggedIn==true}
        <button on:click={logout}> Logout </button>
        {/if}
    {/if}
</div>

<style>
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
</style> 
 