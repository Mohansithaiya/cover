# Ex.05 Book Front Cover Page Design
## Date:07/11/24

## AIM:
To design a book front cover page using HTML and CSS.

## DESIGN STEPS:

### Step 1:
Create a Django Admin project.

### Step 2:
Create an app in the Django interface.

### Step 3:
Create a folder named 'static' in the app folder.

### Step 4:
Create a new HTML file in the static folder.

### Step 5:
Write the HTML code with relevant CSS properties.

### Step 6:
Choose the appropriate style and color scheme.

### Step 7:
Insert the images in their appropriate places.

### Step 8:
Publish the website in the LocalHost.

## PROGRAM:
```
<html>

<head>
    <title>MACHINE LEARNING</title>
    <style>
        .bookpage{

            width: 400px;
            height: 650px;
            color:black;
            margin-left: auto;
            margin-right: auto;
            padding: 20px;
            font-family: 'Roquen';
            background-image:url(webtemp.png);
            background-size: cover;
        }
            
        
        .insight{
            color:rgb(10, 10, 10);
        
        }
        
        
        .hrstyle{
            width:100px;
        }
        .author{
        
            display: inline;
            position: relative;
            color:black;
            top:190px;
            
            font-family:Georgia;
            font-size: medium;
        }
        .booktitle{
            color:black;
            font-family: 'Helvetica';
            font-size: larger;
            text-align: center;
            position: relative;
            top: 30px;
        
        }
        .id {
            width:400px;
            position: relative;
            top:180px;
            
        }
        .pub{
            color:rgba(10, 10, 10, 0.76);
            font-size: medium;
            position: relative;
            top:155px;
            left:330px;
        }
        .ed{
            color:rgb(11, 11, 11);
            font-size: medium;
            font-family: Verdana;
            position:relative;
            top:90px;
        
        }
        .subtitle{
            color:rgb(12, 12, 12);
            font-family: Arial.;
            font-size: large;
            position: relative;
            top:40px;
        }
        .mypic{
            position: relative;
            top: 145px;
            left: 260px;
            width: 90px;
            height: 80px;
            background-size:contain;
        }
        </style>
        <title>Book Cover Page</title>
        </head>
        <body>
        <div class="bookpage">
            <div class="insight">
                SEC INSIGHT 
            </div>
            <div class="hrstyle">
                <hr style="color:blanchedalmond">
            </div>
            <div class="booktitle">
                <h1>Machine Learning for Everyone: Unlocking the Power of Data</h1></div>
            <div class="subtitle">
                A Beginner's Guide to Understanding and Using AI
            </div>
            <div class="subtitle">
                <h1 align="center">Learn & Apply</h1>
            </div>

            <div class="mypic">
                <img src="MOHAN PASSPORT SIZE_11zon.jpeg" width="100" height="120" >
            </div>
            <div class="id">
                <hr style="color:rgb(12, 132, 217)">
            </div>
            <div class="author">
               <p><b>MOHAN.S</b></p>
            </div>
            <div class="pub">
                SEC
            </div>
            <div class="ed">
                <b>Extended EDITION</b>
            </div>
        </div>
        </body>
        

</html>


```

## OUTPUT:

![alt text](<Screenshot 2024-11-07 225148.png>)

## RESULT:
The program for designing book front cover page using HTML and CSS is completed successfully.
