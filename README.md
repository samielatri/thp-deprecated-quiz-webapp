# THP QUIZ
## Mission pour THP

## Description de la mission 
Développement d'une application qui propose une série de quiz sur différents thèmes abordés au cours de la formation THP.

## Parcours utilisateur
L'utilisateur choisit un thème parmi ceux qui lui sont proposés (par exemple : HTML5, git, les structures de contretc.) et répond au quiz correspondant. 
A la fin de chaque question, la solution de ce dernier apparait.
A la fin du quizz, son score est affiché. 

## Version
L'application est en version de présentation afin de présenter le concept de l'application.
C'est pour cela qu'elle présente un style très minimaliste, qu'elle n'est pas hébergée en ligne et qu'elle n'utilise pas de base de donnée.
 
## Comment mettre à jour les Quiz

### Création d'un nouveau Quiz

Il faut, tout d'abord, créer votre google spreadsheet à l'aide de google drive spreadsheets suivant le modèle suivant :
la première ligne du google spreasheet doit etre identique à celle çi :
--------------------------------------------------
|  Question | Answer | Options |	|	| ...
--------------------------------------------------

La colonne de Question contiendra les questions du quiz.
La colonne Answer contiendra la réponse du Quiz, qui, est, aussi, par défaut, considéré comme option.
La colonne Options et toutes les colonnes qui succèdent Options contiendront le reste des options.

NB: vous pouvez trouvé des exemples dans le dossier spreadsheets

Par la suite, il suffit, de remplacer dans le code contenu dans gs/Code.gs "put_the_stylesheet_id_here" par l'identifiant de votre google spreasheet.

Vous pourrez, alors, lancer l'éditeur de scripts intégré à partir du menu outils/editeur de scirpts, et de coller ledit code.

Il ne reste plus qu'à générer l'application et de copier le lien de cette dernière pour le coller dans le fichier javascript correspondant(js/nom_du_quiz.js).
  
### Edition d'un Quiz existant

Si le Quiz est déjà crée, il suffit d'éditer le google spreadsheet et de générer une nouvelle version de l'application pour ensuite copier son lien et le mettre à jour dans le fichier javascript correspondant (js/nom_du_quiz.js).
