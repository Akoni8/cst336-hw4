<!--Adapt your Assignments 2 or 3 to use both JavaScript and jQuery instead of PHP.-->
<!--Feel free to improve your revised version.-->

<!--Rubric:-->

<!--Program uses some of the elements used in Assignments 2 or 3 (conditions, loops, arrays, form elements) (60 pts)-->
<!--Program uses both JavaScript and jQuery (20 pts)-->
<!--Program uses Bootstrap (20 pts)-->
<!DOCTYPE html>
<html>
    <head>
        <title>DBZ Generator</title>
        <link  href="css/styles.css" rel="stylesheet" type="text/css" />
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>

        <div id="container">
            
            <p id="logo">
            <a href="https://fontmeme.com/dragon-ball-z-font/"><img src="https://fontmeme.com/permalink/171013/494be0ef5bf2ce1c5562f71f2ffe0e3b.png" alt="dragon-ball-z-font" border="0"></a>
            </p>
            
            <h1>Which fighter are you?</h1>
            
            <form onsubmit="return false;">
                    <div>
                        <span>What is your name?</span>
                        <input class="form-control" type="text" name="name" placeholder="Name">
                    </div>
                    <div>
                        <span>Do you like fighting?</span>
                        <input type="radio" name="fight" value="yes" class="fight"/>
                        <label for="yes">Yes</label>
                        <input type="radio" name="fight" value="no" class="fight"/>
                        <label for="no">No</label>
                    </div>
                    <div class="form-group">
                        <select class="form-control" name="class" id="class" style:"color: black; font-size:1.5em">
                            <option value>Select Class</option>
                            <option value="saiyan">Saiyan</option>
                            <option value="namekian">Namekian</option>
                            <option value="frieza">Frieza Army</option>
                            <option value="human">Human</option>
                        </select>
                    </div>
                    <div>
                        <input class="btn btn-primary" id="reset" type="reset">
                        <input class="btn btn-primary" name="submit" id="submit" type="submit" value="Submit">
                    </div>
            </form>
             <div id="imageBox"></div>
        </div>
         <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
            <script type="text/javascript" src="js/dbz.js"></script>
    </body>
</html>