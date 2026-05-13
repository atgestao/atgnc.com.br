import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Row,
  Column,
} from '@react-email/components';

interface ContactFormEmailProps {
  nome: string;
  email: string;
  telefone: string;
  tipoEmpresa: string;
  assunto: string;
  mensagem: string;
}

export function ContactFormEmail({
  nome,
  email,
  telefone,
  tipoEmpresa,
  assunto,
  mensagem,
}: ContactFormEmailProps) {
  return (
    <Html lang="pt-BR">
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#F8F6F1', margin: 0 }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
          {/* Header */}
          <Section style={{ backgroundColor: '#1A2B4A', padding: '32px', textAlign: 'center' }}>
            <Text style={{ color: '#C9A84C', fontSize: '28px', fontWeight: '300', margin: 0 }}>
              AT <span style={{ fontWeight: 600 }}>Gestão</span>
            </Text>
            <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', letterSpacing: '0.3em', margin: '8px 0 0' }}>
              NOVO CONTATO VIA SITE — atgnc.com.br
            </Text>
          </Section>

          {/* Body */}
          <Section style={{ backgroundColor: '#ffffff', padding: '32px' }}>
            <Text style={{ fontSize: '20px', color: '#1A2B4A', fontWeight: '300', marginBottom: '24px' }}>
              Nova mensagem de <strong>{nome}</strong>
            </Text>

            <Hr style={{ borderColor: '#E2DDD4', margin: '0 0 24px' }} />

            <Row style={{ marginBottom: '16px' }}>
              <Column>
                <Text style={{ fontSize: '10px', color: '#4A4A52', letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>Assunto</Text>
                <Text style={{ fontSize: '14px', color: '#1A2B4A', fontWeight: 600, margin: '4px 0 0' }}>{assunto}</Text>
              </Column>
              <Column>
                <Text style={{ fontSize: '10px', color: '#4A4A52', letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>Tipo de Empresa</Text>
                <Text style={{ fontSize: '14px', color: '#1A2B4A', margin: '4px 0 0' }}>{tipoEmpresa}</Text>
              </Column>
            </Row>

            <Hr style={{ borderColor: '#E2DDD4', margin: '16px 0' }} />

            <Row style={{ marginBottom: '16px' }}>
              <Column>
                <Text style={{ fontSize: '10px', color: '#4A4A52', letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>E-mail</Text>
                <Text style={{ fontSize: '14px', color: '#C9A84C', margin: '4px 0 0' }}>{email}</Text>
              </Column>
              <Column>
                <Text style={{ fontSize: '10px', color: '#4A4A52', letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>Telefone</Text>
                <Text style={{ fontSize: '14px', color: '#1A2B4A', margin: '4px 0 0' }}>{telefone}</Text>
              </Column>
            </Row>

            <Hr style={{ borderColor: '#E2DDD4', margin: '16px 0' }} />

            <Text style={{ fontSize: '10px', color: '#4A4A52', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 8px' }}>Mensagem</Text>
            <Text style={{ fontSize: '14px', color: '#1C1C1E', lineHeight: '1.8', margin: 0 }}>
              {mensagem}
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ padding: '24px', textAlign: 'center' }}>
            <Text style={{ fontSize: '11px', color: '#4A4A52', margin: 0 }}>
              AT Gestão de Negócios e Contabilidade · atgnc.com.br
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactFormEmail;
