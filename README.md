culusms
===========

Um SDK feito para o envio de sms usando o serviço [`culusms.com`](culusms.com)

- [Apresentação](#Apresentação)
- [Instalação](#Instalação)
- [Primeiros passos](#PrimeirosPassos)
- [Mensagens](#Mensagens)
    - [Enviar](#EnviarMensagem)
    - [Pendentes](#MensagensPendentes)
    - [Enviadas](#MensagensEnviadas)
    - [Recebidas](#MensagensRecebidas)
- [Dispositivos](#Dispositivos)
    - [Listas todos](#ListarDispositivos)
    - [Listar um](#ListarUmDispositivo)
- [Livro de endereços](#LivroDeEndereços)
    - [Criar grupo](#CriarGrupo)
    - [Listar grupos](#ListarGrupos)
    - [Criar contacto](#CriarContacto)
    - [Listar contacto](#ListarContactos)
    - [Eliminar grupo](#EliminarGrupo)
    - [Eliminar contacto](#EliminarContacto)

## Apresentação
O serviço [`culusms.com`](culusms.com) permite usar o teu telemovel como um gateway de envio de sms, como se estivesses a enviar a sms manualmente(podendo automatizar com este modulo), dai que a taxa para o envio das mensagens é debitada directamente na tua conta móvel.
Para que o teu celular esteja habilitado como gateway, você precisa ter uma conta no [`culusms.com`](culusms.com) e depois instalar o apk no teu celular e seguir as instruçóes.

## Instalação
#### npm
```sh
$ npm install culusms

```

## PrimeirosPassos
Para criar uma instancia do culusms dentro de um arquivo .js(Obviamente) criado por ti. Adicione o seguinte trecho
```js
const CuluSms = require('culusms');
//Acesse o teu painel no culusms.com navegue e copie a chave da api localizada em FERRAMENTAS -> CHAVES DE API
const client = new CuluSms("<Chave_da_API />") 
```
# Mensagens
  
  ## EnviarMensagem
  
  #### Paramentros 
  ```js
  "Destinatário" Number:<Obrigatório />, "Mensagem" String:<Obrigatório />, "Dispositivo" Number:<Opcional />
  "SIM" Number:<Opcional />,  "Prioridade" (0 ou 1):<Opcional />
  ```
  ```js
  client.messages.send(000000000, 'Sent with culusms').then(res => {
    console.log('success',res)
  }).catch(err => {
    console.log('error',err)
  })
  ```
  
  ## MensagensPendentes
  
  #### Parametros
  ```js
  "Dispositivo" Number:<Opcional />
  ```
  ```js
   client.messages.getPending().then(res => {
      console.log('pending', res)
  }).catch(err => {
      console.log('error', err)
  })
  ```
  
  ## MensagensEnviadas
  
  #### Parametros
  ```js
   "Limite" Number:<Opcional /> ,"Página" Number:<Opcional />, "Dispositivo" Number:<Opcional />
   "Api" Boolean:<Opcional />, "Prioridade" Number:<Opcional />
  ```
  ```js
  client.messages.getSent(22, 0, 22, false, 1).then(res => {
      console.log('semt', res)
  }).catch(err => {
      console.log('error', err)
  })
  ```
  ## MensagensRecebidas
  
  #### Paramentros
  ```js
   "Limite" Number:<Opcional /> ,"Página" Number:<Opcional />, "Dispositivo" Number:<Opcional />
  ```
  ```js
  client.messages.getReceived(5, 0, 22).then(res => {
    console.log('received', res)
  }).catch(err => {
      console.log('error', err)
  })
  ```
  
# Dispositivos
  ## ListarDispositivos
  ```js
  client.devices.getDevices().then(data => {
      console.log('success', data);
  }).catch(err => {
      console.log('error', err)
  })
  ```
  
  ## ListarUmDispositivo
  #### Paramentros
  ```js
   "Id do dispositivo" Number:<Obrigatório />
  ```
  ```js
  client.devices.getDevice(1).then(data => {
      console.log('success', data);
  }).catch(err => {
      console.log('error', err)
  })
  ```
  
  # LivroDeEndereços
  ## CriarGrupo
  #### Paramentros
  ```js
   "Nome do grupo" String:<Obrigatório />
  ```
  ```js
  client.addressBook.createGroup('Test').then(res => {
    console.log('success', res);
  }).catch(err => {
      console.log('error', err)
  })
  ```
  ## ListarGrupos
  ```js
  client.addressBook.getGroups().then(res => {
      console.log('success', res);
  }).catch(err => {
      console.log('error', err)
  })
  ```
  ## CriarContacto
  #### Paramentros
  ```js
  "Número de telefone" Number:<Obrigatório />, "Nome" String:<Obrigatório />, "Id do grupo" Number:<Obrigatório />
  ```
  ```js
  client.addressBook.createContact('+258840000000', 'Pietro Zim', 14).then(res => {
    console.log('success', res);
  }).catch(err => {
      console.log('error', err)
  })
  ```
  ## ListarContactos
  ```js
  client.addressBook.getContacts().then(res => {
      console.log('success', res);
  }).catch(err => {
      console.log('error', err)
  })
  ```
  ## EliminarGrupo
  #### Paramentros
  ```js
   "Id do grupo" Number:<Obrigatório />
  ```
  ```js
  client.addressBook.deleteGroup(15).then(res => {
    console.log('success', res);
  }).catch(err => {
      console.log('error', err)
  })
  ```
  
  ## EliminarContacto
  ```js
   "Id do contacto" Number:<Obrigatório />
  ```
  ```js
  client.addressBook.deleteContact(15).then(res => {
    console.log('success', res);
  }).catch(err => {
      console.log('error', err)
  })
  ```
  
