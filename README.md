<!-- 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>TRAVEL kMER</title>
</head>
<body>
        <P>Make your Reservation with us </P>
        <form action="pages/services.html" method="post">
            <div class="name_input">
                <input type="text" id="username" placeholder="Client Name" required="required"/>
            </div>
            <div class="select_box">
                <select name="available services" id="services">
                    
                    <option value="" disabled selected hidden>From</option>
                    <option value="manicure">Bamenda</option>
                    <option value="pedicure">Yaounde</option>
                    <option value="physiotherapy">Douala</option>
                    <option value="cosmetics">Buea</option>
                    <option value="sales">limbe</option>
                </select>
            </div>
            
            <div class="date">
                <label for="date">Save the date:</label>
                <input type="date" required="required"/>
            </div>
            <div class="submit">
                <button class="submit_btn"><a href="pages/services.html"> Make your reservation</a></button>
            </div>
        </form>
</body>
</html> -->


start for the css
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

body {
  background: transparent;
  position: relative;
}
body p {
  position: absolute;
  text-align: center;
  font-size: 17px;
  margin-top: 130px;
  left: 500px;
  font-size: 26px;
}
body form {
  position: relative;
  top: 200px;
  left: 410px;
  width: 500px;
  padding: 55px 0px 65px 90px;
  border-radius: 10px;
  box-shadow: 1px 2px 20px 8px rgba(0, 0, 0, 0.05);
}
body form .name_input input {
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 16px;
  font-size: 20px;
  border-bottom: 3px solid rgba(129, 104, 155, 0.24);
}
body form .name_input input:focus {
  border-bottom: 3px solid rgba(128, 72, 188, 0.24);
}
body form .name_input input:hover {
  cursor: pointer;
  border: 2px solid rgba(128, 72, 188, 0.24);
}
body form .date {
  display: flex;
  justify-content: space-between;
  margin: 30px 0px 15px 0px;
  width: 278px;
}
body form .date label {
  font-size: 17px;
}
body form .date input {
  width: 50%;
  font-size: 16px;
}
body form .select_box {
  width: 278px;
  margin: 30px 0px 15px 0px;
}
body form .select_box #services {
  width: 100%;
  padding: 13px;
  -webkit-appearance: none;
  font-size: 16px;
  text-align: center;
  outline: none;
  border-radius: 5px;
}
body form .select_box #services:hover {
  box-shadow: 1px 2px 2px 8px rgba(0, 0, 0, 0.05);
  padding-bottom: 4px;
  transition: 1s;
}
body form .select_box #services option {
  font-size: 16px;
}
body form .submit {
  width: 150px;
  margin: 40px 0px 0px 60px;
}
body form .submit button {
  width: 100%;
  background-color: rgba(128, 72, 188, 0.24);
  padding: 12px;
  outline: none;
  border-radius: 10px;
  border: none;
  font-size: 17px;
  color: aliceblue;
  cursor: pointer;
}
body form .submit button:hover {
  background-color: black;
  text-transform: uppercase;
}

body header .logo .asa {
  background-color: rgba(15, 15, 162, 0.799);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 30px 0px 0px 40px;
  position: relative;
}
body header .logo .asa p {
  position: absolute;
}/*# sourceMappingURL=style.css.map */