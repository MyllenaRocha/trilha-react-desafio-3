import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';

import {
	Button,
	Container,
	FormContainer,
	FormTitle,
	FormSubTitle,
	Header,
	Main,
	Row,
	Title,
	Input,
	Column,
	InputContainer,
	IconContainer,
	RowInput,
	ButtonContainer,
} from './styles';
import logoDio from '../../assets/logo-dio.png';

const Cadastro = () => {
	return (
		<Container>
			<Header>
				<Row className="header__container">
					<img src={logoDio} alt="logo" />
					<Row className="nav">
						<p>Cadastro</p>
						<Button>Entrar</Button>
						<Button>Cadastrar</Button>
					</Row>
				</Row>
			</Header>
			<Main>
				<Title>
					A plataforma para você aprender com experts, dominar as principais
					tecnologias e entrar mais rápido nas empresas mais desejadas.
				</Title>

				<FormContainer>
					<FormTitle>Comece agora grátis</FormTitle>
					<FormSubTitle>Crie sua conta e make the change._</FormSubTitle>
					<InputContainer>
						<RowInput>
							<IconContainer>
								<BsFillPersonFill />
							</IconContainer>
							<Input placeholder="Nome completo" type="text" />
						</RowInput>
						<RowInput>
							<IconContainer>
								<MdEmail />
							</IconContainer>
							<Input placeholder="E-mail" type="email" />
						</RowInput>
						<RowInput>
							<IconContainer>
								<RiLockPasswordLine />
							</IconContainer>
							<Input placeholder="Password" type="password" />
						</RowInput>
					</InputContainer>
					<ButtonContainer variant="secundary">
						Criar minha conta
					</ButtonContainer>
					<FormSubTitle>
						Ao clicar em "criar minha conta grátis", declaro que aceito as
						Políticas de Privacidade e os Termos de Uso da DIO.
					</FormSubTitle>
				</FormContainer>
			</Main>
		</Container>
	);
};

export { Cadastro };
