import React from 'react';
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";

class Login extends React.Component {

    state = {
        email: '', senha: ''
    }

    entrar=()=>{
        console.log('Email:' + this.state.email)
        console.log('Senha:' + this.state.senha)
    }

    render() {
        return (<div className={'container'}>
                <div className="row">
                    <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
                        <div className="bs-docs-section">
                            <Card title={'Login'}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                <FormGroup label={'Email'}>
                                                    <input type="email" className="form-control"
                                                           placeholder="Email" required
                                                           value={this.state.email}
                                                           onChange={e => this.setState({email: e.target.value})}
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <input type="password" className="form-control"
                                                           value={this.state.senha}
                                                           onChange={e => this.setState({senha: e.target.value})}
                                                           placeholder="Password" required/>
                                                </FormGroup>
                                                <button onClick={this.entrar} type={'button'} className={'btn btn-primary'}>Entrar</button>
                                                <button onClick={this.entrar} type={'button'} className={'btn btn-danger'}>Cadastrar</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default Login;