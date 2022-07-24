window.onload = () => {
  //recuper tous les produits de la page
  let produits = document.querySelectorAll(".produit");

  let recapNumber = document.querySelector(".nbr");
  let recapPrice = document.querySelector(".p");
  let prixTotal = document.querySelector(".pt");
  let nbrProduits = parseInt(document.querySelector(".nbr").textContent);
  let prixProduits = parseFloat(document.querySelector(".p").textContent);
  let val = document.getElementsByClassName("produit");
  let prixLivraison = parseFloat(
    document.querySelector(".delivery").textContent
  );

  for (let i = 0; i < val.length; i++) {
    nbrProduits += parseInt(val[i].querySelector(".quant").value);
    prixProduits += parseFloat(val[i].querySelector(".prixU").textContent);
  }
  recapNumber.innerText = nbrProduits;
  recapPrice.innerText = prixProduits.toFixed(2);
  prixTotal.innerText = (prixProduits + prixLivraison).toFixed(2);

  //lancer une boucle pour parcourir tous les produits
  for (let produit of produits) {
    let priceUnit = produit.querySelector(".prixU"); //prix unitaire pour chaque produit
    let quantity = produit.querySelector(".quant"); //quantité de chaque produit
    let plus = produit.querySelector(".btn-plus"); //ajouter un produit
    let moins = produit.querySelector(".btn-moins"); //enlever un produit
    let prixT = produit.querySelector(".prixT"); //prix total du meme produit
    let deletep = produit.querySelector(".del");
    let favoris = produit.querySelector(".fav");

    //afficher le prix unitaire du produit dans le input
    prixT.innerText = priceUnit.textContent;

    //ajouter un evenement pour le boutton +
    plus.addEventListener("click", addP);

    //ajouter un evenement pour le bouton -
    moins.addEventListener("click", removeP);

    //fonction pour ajouter de la quatité
    function addP() {
      quantity.value++;
      nbrProduits++;
      prixProduits += parseFloat(priceUnit.textContent);
      prixT.value =
        parseFloat(priceUnit.textContent) * parseFloat(quantity.value);

      prixT.innerText = prixT.value.toFixed(2);
      recapNumber.innerText = nbrProduits;
      recapPrice.innerText = prixProduits.toFixed(2);
      prixTotal.innerText = (prixProduits + prixLivraison).toFixed(2);
    }

    //fonction pour supprimer une quantité
    function removeP() {
      quantity.value--;
      nbrProduits--;
      prixProduits -= parseFloat(priceUnit.textContent);
      prixT.value =
        parseFloat(priceUnit.textContent) * parseFloat(quantity.value);

      prixT.innerText = prixT.value.toFixed(2);
      recapNumber.innerText = nbrProduits;
      recapPrice.innerText = prixProduits.toFixed(2);
      prixTotal.innerText = (prixProduits + prixLivraison).toFixed(2);
    }

    //ajouter un evenement pour le bouton delete
    deletep.addEventListener("click", deleteProduit);

    //foncction pour supprimer un produit
    function deleteProduit() {
      produit.style.display = "none";
    }
    //ajouter un evenement pour le bouton favoris
    favoris.addEventListener("click", fav);

    function fav() {
      if (favoris.querySelector("i").innerText == "favorite_border") {
        favoris.querySelector("i").innerText = "favorite";
        favoris.style.color = "red";
        produit.style.background = "#E6BC9C";
      } else {
        favoris.querySelector("i").innerText = "favorite_border";
        favoris.style.color = "black";
        produit.style.background = "#d4cfb4";
      }
    }
  }
};
