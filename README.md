# Hackaton

Hackaton Toulouse 2024 de France Travail

Exercice :

Vous devrez créer un personnage à l’aide du kit fournit, ce kit contient différente partie de corps (tête – torse – yeux – bras – jambes – bouche – nez, il faudra évidemment utiliser chacun d’eux pour une représentation cohérente c-à-d une tête avec 2 yeux un nez et une bouche, un torse, deux bras, deux jambes). Un personnage devra correspondre à une offre d’emploi trouvée sur l’api Pôle Emploi selon des critères qui vous seront communiqué le jour J et seront différents d’une équipe à l’autre (numéro de département et code Rome).
Les offres d’emploi contiennent une expérience exigée, chaque personnage aura une couleur en correspondance avec cette expérience :
• D (Débutant) : Bleu,
• E (Expérimenté) : Jaune,
• S (Sénior) : Vert.
La construction du personnage doit être fait aléatoirement (hormis le contexte de couleur).
La page doit faire apparaître en plus du personnage les données de l’offre d’emploi suivantes :
• Intitulé,
• L’expérience exigée,
• Date de création de l’annonce,
• Le département.
Attention certains torses ont des largeurs et des formes différente, l’ensemble doit rester cohérent.

Contraintes :

Vous devez faire appel à l’api pôle emploi « Offre d’emploi » à l’adresse : API Offres d'emploi | pole-emploi.io | pole-emploi.io
Le choix de l’architecture, des langages et des Frameworks est libre, il fera l’objet d’une justification lors de votre présentation.
Les bonnes pratiques en matière de sécurisation de l’application sont prises en compte.
La fiabilité et la robustesse de l’application sont prouvées via des tests en back obligatoirement, en front si nécessaire (si le personnage est assemblé en front, par exemple). Son évolutivité et sa maintenabilité sont justifiées lors de votre présentation.
Le code de l’application est déposé sur un dépôt git public.

Livrable :
Must have :
Une application web consultable depuis un navigateur dont la page principale doit contenir le personnage et les éléments de l’annonce France Travail cité plus haut.

Bonus
Si vous avez le temps, vous pouvez également :
• Créer une pagination en créant entre 5 et 10 personnages (gardez à l’esprit d’afficher pour chacun les éléments de l’annonce).
• Faire un personnage multicolore dont seul le torse conserve le code couleur correspondant à l’expérience exigée.
• Rajouter des critères modifiables en front pour surfiltrer les annonces et les faire apparaître lors du retour en front pour contrôler (en plus des autres éléments énoncés plus haut).

Temps :

- 3 demies journées
- équipe de 4 développeurs
