# Api-test-Airweb
Api Backend e-commerce

# Description

Bonjour, 

Voici une api succinte permettant de gérer le backend d'un site d'e-commerce

les entrées sont : 
/login -> permet de s'identifier
/products -> permet de récupérer la liste des produits disponibles pour l'utilisateur
/cart -> permet de récupérer le contenu du panier de l'utilisateur
/setCart -> permet de mettre à jour le contenu du panier de l'utilisateur

les technologies utilisées sont : 
- Nest.js
- TypeScript
- Sqlite

# Installation

(== Par soucis de compression, node_modules ne fait pas partie du repertoire git, il faut vérifier que les dépendances soient bien réinstallées au lancement ==)

1) Simple (sur une machie avec node, npm, visual studio code, soapUI):
- Récupérer le projet sur une machine avec node.js et npm d'installé
- Ouvrir le projet avec Visual Studio Code (ou équivalent)
- Entrer dans le terminal de Visual Studio Code : npm run start
- Ouvrir le fichier "test-air-web-api/test-airweb-soapui-project.xml" avec SoapUI
- Vérifier les appels enregistrés dans soapUI

2) Détaillée (sur une machine avec node et npm)
- Récupérer le projet
- l'ouvrir avec visual studio code ou équivalent
- ouvrir un terminal et se rendre à la racine du projet
- entrer la commande : npm run start
-> le serveur se lance en local sur l'adresse localhost:3000
- envoyer les reqêtes suivantes pour tester les endpoints

Get localhost:3000/login :
Envoie d'un Get avec les headers personnalisés suivant pour savoir si l'utilisateur est enregistré : 
- 'login':'vincent@airweb.fr' -> ici le login de l'utilisateur
- 'password':'bonjour' -> ici le mot de passe

Get localhost:3000/products :
Envoie d'un Get avec les headers personnalisés suivant pour récupérer la liste des produits disponibles : 
- 'login':'vincent@airweb.fr' -> ici le login de l'utilisateur
- 'password':'bonjour' -> ici le mot de passe
- -> si les headers sont absents ou invalides, seulement les produits publiques sont retournés

Get localhost:3000/setCart :
Envoie d'un Get avec les headers personnalisés suivant pour sauvegarder le panier de l'utilisateur :
- 'login':'vincent@airweb.fr' -> ici le login de l'utilisateur
- 'password':'bonjour' -> ici le mot de passe
- 'cart_content' : '{"cart_items" : [1,5,3,...]}' -> ici les id des produits à ajouter

Get localhost:3000/cart :
Envoie d'un Get avec les headers personnalisés suivant pour récupérer la liste des produits sauvegardés dans le panier : 
- 'login':'vincent@airweb.fr' -> ici le login de l'utilisateur
- 'password':'bonjour' -> ici le mot de passe

# Axes d'améliorations

Le projet est très léger et il m'a servi à apprendre des nouvelles technos de ce fait il est plus à l'état de prototype que de produit fini, sans parler de rajout de fonctionnalités, le projet nécessite certaines modifications pour être complétement viables dont les points suivants :
- Ajouter une documentation approfondie avec diagrammes UML, Swagger
- Ajout d'une batterie de tests automatisés (unitaire/intégration) pour modifier le projet sans risque de downgrade.
- Changer le système de connexion par un système de Token. (JWT)
- Changer les Get par des Posts pour plus de cohérence
- Uniformiser les données envoyées pour garder une cohérence entre les différents appels

Merci de votre lecture !


