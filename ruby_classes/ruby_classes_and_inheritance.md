# Class, Inheritance, & OOP: Ruby

## Learning Objectives
- Define object properties and methods
- Demonstrate and explain instantiation
- Explain how an object's properties are only accessible with getter methods
- Write getter methods and setter methods to retrieve and set a property's value
- Create a class that inherits from another class

### Why is this important?

- Ruby is a great way to learn **object oriented programming (OOP)**.
- Almost everything in Ruby is an object!
    - `Class`
    - `Module`
    - `Method`
    - `Object.new`
    - `"strings too!"`
    - `78501`

### Individual Drill: Classes and Objects
##### Time: 3 minutes
##### Link: (terminal: `irb`)
##### Instructions:

- open up terminal on your local or cloud9
- type `irb` to test some Ruby
1. Test for class using `.class`
2. Check if that class is an object using `.is_a? Object`
    - example: `1`
    - `1.class` => `Fixnum`
    - `Fixnum.is_a? Object` => `true`
    
3. Test out: `3.14159`, `"potato"`, `[1, 2, 3]`, `{:color => "red"}`, `false`

## Objects
So everything in Ruby is an object? What does that mean?
- Ruby objects are not the same as Javascript objects. Key/Value pairs in Ruby are called `Hashes`.
- Every entity (ie. data types) we've explored has properties and methods contained inside it.
- Everything "inherits" from the Object Class... it's like the cradle of life for Ruby.

### Classes & Instantiation
Classes are blueprints -- individual objects are created from these blueprints. Classes define object properties and methods so they can be accessed by an **instance** of that class.

##### EXAMPLE: CAR CLASS
Let's create a class called Car. Within this class we can define all the components that make up a car: engine, wheels, transmission, breaks, mpg, etc. We don't have a car object yet, but the class serves as a **blueprint** and allows us to capture and organize all the data and functionality that a car object would need. We can then instantiate a type of car, or in other words, we have an instance of this car. This **instance** of car will only be able to access the components and functionality defined in the class.

Confusing? Let's put it to action.

#### Creating a Class
Let's create a class for King of Hearts -- we are creating a blueprint. We specify the methods to capture the pertinent attributes related to this object (value, suit). We'll define them as 10 and heart.

```
class King
    def value
        10
    end

    def suit
        "heart" 
    end
end
```

So now that we have our blueprint -- we want to create an **instance** of it.

```
king_of_hearts = King.new

puts king_of_hearts
puts king_of_hearts.suit
puts king_of_hearts.value
```

Notice how king_of_hearts refers to a specific place in memory. If we were to create a second instance of it called king2, what does this evaluate to? king2 refers to a separate place in memory, so they are 2 independent instances of class King.

It's kind of pointless to create a class like this because we don't want to create more than one King of Hearts. Let's create a Dog class instead!

```
class Dog
    def breed
        "Beagle"
    end

    def name
        "Snoopy"
    end

    def color
        "white"
    end

    def bark1
        puts "Bark Bark Bark!"
    end

    def bark2
        puts "Awoooo!"
    end
end
```
We created our blueprint. Now we instatiate.

```
snoopy = Dog.new

p snoopy
puts snoopy.breed
puts snoopy.name
puts snoopy.nickname
snoopy.bark1
snoopy.bark2
```

#### Setters and Getters
We used methods (ie. bark1 and bark2) to do some type of functionality. We also use methods to store attributes. These attributes are referred to as Setters and Getters. These deal with **accessibility** of these values. 

```
snoopy.suit = "hearts" => returns Error
``` 

This throws an error because snoopy can't access snoopy.suit. snoopy is a Dog object and we only have access to Dog methods of breed, name, color, bark1, and bark2. Nothing more.

### attr_accessor
- Ruby allows us a really quick way to create class attribute setters and getters with `attr_accessor`.
- `attr_reader` for getters (get the value)
- `attr_writer` for setters (set the value)
- `attr_accessor` does both!

```
class Dog
    attr_accessor :breed, :name, :color, :bark1, :bark2
end
```

### Individual Drill!
##### Time: 4 minutes
##### Link: (terminal `ruby`)
##### Instructions:
- Create a class Cat using attr_accessor. Assign it :name, :color
- Create an instantiation of class Cat by creating a variable called `new_cat`
- Access (ie. `puts`) the :name, :color
- Assign values to :name, :color and access those again

### initialize
So far we've been creating a class then instantiating it. Then we assign values to those attributes. That's a lot of repetition, if I wanted to create 100 cats and dogs. We can use a special ruby `initialize` method to instantiate values from the get go! 

```
class Dog
    attr_accessor :name, :nickname, :color
    attr_reader :bark1, :bark2

    def initialize(name, nickname, breed)
        @name = name
        @nickname = nickname
        @colo = color
    end

    def bark1
        puts "bark bark"
    end

    def bark2
        puts "Meow, I'm confused."
    end
end

my_dog = Dog.new("Snoopy", "Snoop Dogg", "white")

p my_dog
p my_dog.name
p my_dog.nickname
p my_dog.breed

my_dog.bark1
my_dog.bark2
```

### Ruby variables
Wait, what are @name, @nickname, @color? These are instance variables. They refer specifically to the instance of Dog run from the initialize function. When we instantiated a new Dog object with parameters, the initialize method took those values and set them accordingly for this one time.

There are 4 types of Ruby Variables:
- **local variables**: variables that are defined in a method. local variables are not available outside the method. local variables begin with a lowercase letter or _.
- **instance variables**: instance variables are available across methods for any particular instance or object. That means that instance variables change from object to object. Instance variables are preceded by the @ sign and followed by the variable name.
- **class variables**: class variables are available across different objects. A class variable belongs to the class and is a characterist of a class. They are preceded by @@ and followed by the variable name.
- **global variables**: class variables are not available across classes. If you want a single variable that is available across classes, you need to define a global variable. The global variables are always preceded by the $.

### Individual Drill: initialize
##### Time: 5 minutes
##### Link: (terminal `ruby`)
##### Instructions: 
- Create a class Student
    - use getters and setters for :first_name, :last_name, :age, :favorite_food
    - use initialize method
    - instantiate yourself using .new (pass in instance variables as arguments)
    - puts the object, puts your name, last name
- Create a class Dinosaur
    - use getters and setters for :species, :era, :height
    - use the initialize method
    - instantiate your favorite dinosaur
    - verify the object and puts the object, puts the species

### Class vs Instance Methods
- A **class method** is a method that the class itself has access to. It does not need an instantiated instance to invoke it. The class method is a method for the blueprint itself.
- An **instance method** is a method that an instance of the class can call.

```
class Ninjaturtle
    def self.exclaim
        puts "Cowabunga!"
    end
    
    def fight
        puts "Is pizza a weapon?"
    end
end

Ninjaturtle.exclaim
Ninjaturtle.fight       # throws error

leonardo = Ninjaturtle.new
leonardo.fight
leonardo.exclaim        # throws error
```

### self
`self` is the equivalent to `this` in javascript. It refers to the current object being evaluated.

### Individual Drill!
##### Time: 3 minutes
##### Link (terminal `ruby`)
##### Instructions:
- Create a class called Homer
- Create a class method called `punch` and have it puts "DOH!"
- Create an instance method called `snack` and have it puts "Mmm... Donuts..."

### Inheritance
Ruby uses [classical inhertance](http://stackoverflow.com/questions/19633762/classical-inheritance-vs-protoypal-inheritance-in-javascript). This means classes can inherit attributes from another class. This concept is very similar to parent/child DOM elements inheriting CSS properties.

```
class GameEntity
    attr_accessor :name, :healthpoints, :attack_dmg
    
    def initialize(name, healthpoints, attack_dmg)
        @name = name
        @healthpoints = healthpoints
        @attack_dmg = attack_dmg
    end
end

class Wizard < GameEntity
    def attack
        puts "Oh no! You take #{@attack_dmg} damage!"
    end
end

class Dragon < GameEntity
    def initialize(healthpoints, attack_dmg)
    @name = "Evil Dragon"
    @healthpoints = healthpoints
    @attack_dmg = attack_dmg
    end
end

player1 = Wizard.new("Christine", 100, 50)
dragon = Dragon.new(50, 10)

puts player1.name
puts dragon.healthpoints

player1.attack
```

### Individual Drill!
##### Time: 10 minutes
##### Link (terminal `ruby`)
##### Instructions:
- Create a class for Pizza
- Create a class for Vegetarian which inherits from Card but has toppings set to "cheese"
- Create a class for Pepperoni  which inherits from Card and has toppings set to "pepperoni"
- Verify objects and puts some attributes

Other Exercises:
- Create a class that represents a TV show
- Create a class that represents something in this room
- Create a class that represents holidays



