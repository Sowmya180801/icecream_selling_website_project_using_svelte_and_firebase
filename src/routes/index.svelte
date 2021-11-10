<script>
    import { firestore } from '../db';
    import { onMount } from 'svelte';

    let icecreams = [];
    let search = '';

    $ : new_ice = icecreams.filter((i)=>i.name.includes(search));

onMount(() =>{
    getIceCreams();
});
 async function filters(){

    const l1 = await firestore.collection('icecreams').orderBy("price","asc").get();

    const l2 = await firestore.collection('icecreams').orderBy("price","desc").get();

    const l3 = await firestore.collection('icecreams').where("price","<=",50).get();

    const l4 = await firestore.collection('icecreams').where("price",">=",50).get();

    const l5 = await firestore.collection('icecreams').where("price","==",50).get();

 }
async function getIceCreams() {
    let t = [];
    const l = await firestore.collection('icecreams').get();
    l.forEach((doc) => t.push(doc.data()));
    icecreams = t;
}
</script>
<div> 
        <a href='/create'><button>Create IceCream</button></a>
        <input type="text" placeholder="Search..." bind:value ={search}/>
	<div class="container">
        {#each new_ice as i}
        <div class="card">
            <img src ={i.url} alt=" "width ="250" height="200"/>
            <ul>
            <li><p>Icecream name : {i.name}</p></li>
            <li><p>Quantity : {i.quantity}</p></li>
            <li><p>Price : {i.price}</p></li>
           </ul>
        </div>
        {/each}
    </div>
</div>

<style>
    button {
         padding: 10px 20px;
         border: none;
         background-color:   #F08080;
         margin: 0 auto;
         font-size: medium;
         border: 1px solid #ccc;
         border-radius: 18px;
         text-decoration: none;
         display: block;
         width: 180px;
         color: white;
         cursor: pointer;
     }
     p{
         font-style: italic;
         font-weight: bold;
     }
     .card{
         margin :20px;
         border: 1px solid rgb(167, 243, 96);
         width:250px;
         }
         .container{
             display: grid;
             grid-template-columns: auto auto auto auto;
             width:80%;
             border: 1px solid #ccc;
             margin :20px auto;
     }
     input{
        width :40%;
        margin :10px auto;
        border-radius: 20px;
        border:none;
        padding:10px;
        background-color: rgb(245, 220, 228);
        display:block;
     }
 </style>