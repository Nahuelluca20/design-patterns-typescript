// Decorator Pattern

interface Component {
  operations(): string;
}

class ConcretComponent implements Component {
  public operations(): string {
    return "concret component";  
  }
}

class Decorator implements Component {
  constructor(protected component: Component) {
    this.component = component;
  }

  operations(): string {
    return this.component.operations();
  }
}

class ComponentDecoratorA extends Decorator {
  public operations(): string {
    return `ComponentDecoratorA (${super.operations()})`;
  }
}

const component = new ConcretComponent();
const decorator = new ComponentDecoratorA(component);
decorator.operations(); // retuern: "ComponentDecoratorA(concret component)"