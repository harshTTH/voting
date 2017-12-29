module.exports = function(markup){
    return `
    <html>
    <head>
        <title>Groupz</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">
    </head>
    <body>
        <div id="root"><${markup}></div>
        <script src="/assets/bundle.js"></script>
    </body>
    </html>`;
}