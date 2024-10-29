# HooksAPI_RN - React Native Hooks & API Integration

## 📱 Sobre o Projeto

HooksAPI_RN é uma aplicação React Native que demonstra o uso avançado de Hooks e integração com APIs. O projeto implementa um CRUD completo de usuários, utilizando Context API para gerenciamento de estado e demonstrando boas práticas de desenvolvimento com TypeScript.

## 🚀 Tecnologias Utilizadas

- React Native
- TypeScript
- Context API
- React Navigation
- React Native Elements (@rneui)
- React Native Linear Gradient
- React Native Touchable Scale

## 🛠️ Funcionalidades

- [x] CRUD completo de usuários
- [x] Gerenciamento de estado com Context API
- [x] Navegação entre telas
- [x] Formulários com validação
- [x] Interface responsiva e moderna
- [x] Confirmação de ações críticas (ex: exclusão)

## 📁 Estrutura do Projeto

```
src/
├── context/
│   └── Userscontexte.tsx    # Context API setup
├── views/
│   ├── UserForm.tsx         # Formulário de usuários
│   └── UserList.tsx         # Lista de usuários
├── data/
│   └── users.ts            # Definições dos usuarios Exemplos
└── App.tsx                 # Componente principal
```

## 💻 Principais Componentes

### UserForm
```typescript
// Formulário para criar/editar usuários
interface User {
    id: number;
    nome: string;
    email: string;
    avatar: string;
}
```

**Funcionalidades:**
- Criação de novos usuários
- Edição de usuários existentes
- Validação de campos
- Integração com Context API

### UserList
```typescript
// Lista de usuários com opções de edição/exclusão
interface UsersContextType {
    users: User[];
}
```

**Funcionalidades:**
- Listagem de usuários
- Opções de edição
- Confirmação de exclusão
- Avatar e informações do usuário

## ⚙️ Como Executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Rafa1a/HooksAPI_RN
   cd HooksAPI_RN
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Instale as dependências específicas**
   ```bash
   npm install @react-navigation/native @react-navigation/native-stack @rneui/themed @rneui/base react-native-linear-gradient react-native-touchable-scale
   ```

4. **Execute o projeto**
   ```bash
   npx react-native run-android
   # ou
   npx react-native run-ios
   ```

## 📦 Dependências Principais

```json
{
  "dependencies": {
    "@react-navigation/native": "^6.x",
    "@react-navigation/native-stack": "^6.x",
    "@rneui/base": "^4.x",
    "@rneui/themed": "^4.x",
    "react-native-linear-gradient": "^2.x",
    "react-native-touchable-scale": "^2.x",
    "typescript": "^4.x"
  }
}
```

## 🎯 Hooks Utilizados

- **useState**: Gerenciamento de estado local
- **useContext**: Acesso ao estado global
- **useEffect**: Efeitos colaterais
- **useReducer**: Lógica complexa de estado
- **useNavigation**: Navegação entre telas

## 🔧 Configuração do Navigation

```typescript
const Stack = createNativeStackNavigator();

// Configurações padrão das telas
const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}
```

## 📱 Estilização

O projeto utiliza uma combinação de StyleSheet do React Native e componentes estilizados do React Native Elements para criar uma interface moderna e responsiva.

```typescript
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10
  },
  form: {
    padding: 12
  }
});
```

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova Feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Próximos Passos

- [ ] Implementar testes unitários
- [ ] Adicionar autenticação
- [ ] Melhorar validação de formulários
- [ ] Implementar cache local
- [ ] Adicionar temas dark/light

---
⌨️ Desenvolvido com ❤️ por [seu-nome](https://github.com/Rafa1a)
