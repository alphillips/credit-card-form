# credit-card-form

Credit card react component

## Usage

### Install
```
npm i @react-ag-components/credit-card-form --save
```
### Use in your project
```
import CreditCardForm from '@react-ag-components/credit-card-form'
```

```
onChange = (card) => {
  console.log(card)
}


<CreditCardForm
  onChange={this.onChange}
/>

```

### Properties


## Contributing

Get the repository
```
git clone https://github.com/alphillips/credit-card-form.git
```

Update dependencies
```
npm install
```

Run the project
```
npm start
```

### Deploy to npm
#### Build
`npm run build -- --copy-files`

#### Publish
`npm publish --access public`
