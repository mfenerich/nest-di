# NestJS Dependency Injection: A Comprehensive Guide

![NestJS Logo](https://nestjs.com/img/logo_text.svg)

This repository contains a comprehensive tutorial series on Dependency Injection in NestJS, exploring concepts from basic to advanced techniques through practical examples.

## 📚 Articles

### 1. Understanding Dependency Injection in NestJS: A Practical Guide

**Description:** Learn the fundamentals of Dependency Injection in NestJS through a practical example modeling computer components. This introductory guide covers what DI is, why it matters, and how to implement your first module with proper dependency management.

**Tags:** [NestJS, DependencyInjection, WebDevelopment, TypeScript, Modules, Backend, NodeJS, BeginnerTutorial, SoftwareArchitecture, ModularDesign]

### 2. Dependency Injection in NestJS: Cross-Module Services

**Description:** Dive deeper into sharing services across modules in NestJS as we implement CPU and Disk modules that depend on a common Power service. Master the three-step process for cross-module dependencies and understand how NestJS resolves the dependency tree.

**Tags:** [NestJS, CrossModuleServices, TypeScript, ModuleHierarchy, DependencyInjection, BackendDevelopment, NodeJS, IntermediateTutorial, ServiceInjection, ApplicationDesign]

### 3. Advanced Dependency Injection in NestJS: Beyond the Basics

**Description:** Explore advanced Dependency Injection concepts in NestJS including custom providers, scoped instances, dynamic modules, and testing strategies. Learn professional patterns for building flexible, maintainable applications with sophisticated dependency management.

**Tags:** [NestJS, AdvancedDependencyInjection, CustomProviders, DynamicModules, Testing, TypeScript, SoftwareArchitecture, EnterprisePatterns, BestPractices, AdvancedTutorial]

## 🛠️ Running the Example

To run the example project:

1. Clone this repository
```bash
git clone https://github.com/mfenerich/nest-di
cd nest-di
```

2. Install dependencies
```bash
npm install
```

3. Start the application
```bash
npm run start:dev
```

4. Visit http://localhost:3000/computer in your browser

## 📊 Key Concepts Covered

- Basic Dependency Injection
- Module architecture and organization
- Cross-module service sharing
- The three-step process for DI between modules
- Custom providers (Value, Class, Factory)
- Scoped providers
- Dynamic modules
- Testing with DI
- Best practices and architectural patterns

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the tutorials or examples:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- The NestJS team for creating an excellent framework
- The TypeScript and Node.js communities