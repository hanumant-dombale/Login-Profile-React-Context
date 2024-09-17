# Login Profile using React Context

🌐 Context Overview: Allows data to be shared across components without passing props manually through each level.
🚀 When to Use Context: Best for global data like themes, users, or language preferences across multiple components.

🛠 API Components:
    React.createContext: Creates a Context object.
    Context.Provider: Provides the context value to child components.
    Class.contextType: Consumes context in class components.
    Context.Consumer: Subscribes to context in functional components.

🔄 Examples:
    Dynamic context usage, updating context from nested components, and handling multiple contexts.

⚠️ Caveats:
    Be cautious of unnecessary re-renders due to reference identity issues when passing objects as values.

[Project link]()