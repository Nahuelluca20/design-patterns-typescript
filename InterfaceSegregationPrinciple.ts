// Interface Segregator Interface

// Divide the interface into smaller parts to make them maintainable and reusable

interface CanWalk {
  walk(distance: number): void;
}

interface CanSwim {
}

interface Animal extends CanWalk, CanSwim {
  eat(): void;
  sleep(): void;
}

//instead
// interface Animal {
//   walk(distance: number): void;
//   swim(distance: number): void;
//   eat(): void;
//   sleep(): void;
// }

class Dos implements CanWalk, Animal {
  walk(distance: number): void {
    console.log(`Dog walk ${distance} meters`);
  }

  swim(distance: number): void {
    console.log(`Dog swim ${distance} meters`);
    
  }

  eat(): void {
    console.log("dog is eating")
  }

  sleep(): void {
    console.log("dog is sleeping")
  }
}

class Fish implements CanSwim {
  walk(distance: number): void {
    console.log(`Fish walk ${distance} meters`);
  }

  swim(distance: number): void {
    console.log(`Fish swim ${distance} meters`);
    
  }

  eat(): void {
    console.log("Fish is eating")
  }

  sleep(): void {
    console.log("Fish is sleeping")
  }

}