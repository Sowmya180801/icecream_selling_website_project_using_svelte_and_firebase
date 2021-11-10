<script>
    import { firestore } from '../db';
    let name, url, price, color, quantity;
    const addIceCream = async () => {
        await firestore.collection('icecreams').add({
            name,
            url,
            price,
            color,
            quantity
        });
        alert('icecream added');
    };
</script>
<div>
    <p class="title">Create icecream</p>
    <div class="container">
        <input bind:value={name} type="text" placeholder="enter icecream name" />
        <input bind:value={url} type="text" placeholder="enter image URL" />
        <input bind:value={price} type="number" placeholder="enter price" />
        <input bind:value={color} type="text" placeholder="enter color" />
        <input bind:value={quantity} type="number" placeholder="enter quantity" />
        <button on:click={addIceCream}>create</button>
    </div>
</div>
<style>
    .title {
        text-align: center;
        font-size: 25px;
    }
    .container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding :20px;
    }
    input {
        width :40%;
        margin :0 auto;
        border-radius: 10px;
        border:none;
        padding:10px;
        background-color: rgb(245, 220, 228);
    }
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
</style>