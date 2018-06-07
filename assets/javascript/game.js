
      var targetNumber = Math.floor(Math.random() * 50);
      var crystal1 = Math.floor(Math.random() * 13);
      var crystal2 = Math.floor(Math.random() * 13);
      var crystal3 = Math.floor(Math.random() * 13);
      var crystal4 = Math.floor(Math.random() * 13);
  
  var games = {
      start: function () {
        // get the 'right' selector. Returns a set of elements found in the DOM 'right'
      this.$right = document.getElementById('right');
      // get the 'right' selector. Returns a set of elements found in the DOM 'wrong'
      this.$wrong = document.getElementById('wrong');

      this.$counter = document.getElementById('counter');



      console.log("crystal1: " + crystal1);
      console.log("crystal2: " + crystal2);
      console.log("crystal3: " + crystal3);
      console.log("crystal4: " + crystal4);
      }
  };

  $(document).ready(function() {
  
      games.start();

      $("#number-to-guess").text(targetNumber);

      var crystals = $("#crystals");

      var counter = 0;
      var right = 0;
      var wrong = 0;

      // Now for the hard part. Creating multiple crystals each with their own unique number value.

      // We begin by expanding our array to include four options.
      var numberOptions = [crystal1, crystal2, crystal3, crystal4];

      // Next we create a for loop to create crystals for every numberOption.
      for (var i = 0; i < numberOptions.length; i++) {

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", "assets/images/" + i +".png");

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        crystals.append(imageCrystal);
      }

      // This time, our click event applies to every single crystal on the page. Not just one.
      crystals.on("click", ".crystal-image", function() {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        counter += crystalValue;

        // All of the same game win-lose logic applies. So the rest remains unchanged.
        // alert("New score: " + counter);

        if (counter === targetNumber) {
          
          right++;
          $("#right").text(right);
          console.log("win: " + right);
          alert("You win!");
        }

        else if (counter >= targetNumber) {
          
          wrong++;
          $("#wrong").text(wrong);
          console.log("Lose: " + wrong);
          alert("You lose!!");
         
        }

        
        $("#counter").text(counter);
        console.log("counter: " + counter);
      });

  });

