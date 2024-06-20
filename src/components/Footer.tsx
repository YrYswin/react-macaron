import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaVk } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterIcons>
          <FooterIcon>
            <ImgFooter src="/public/image/FrameFooter.svg" alt="Готовим вручную и с любовью" />
            <IconText>Готовим вручную и с любовью</IconText>
          </FooterIcon>
          <FooterIcon>
            <ImgFooter src="/public/image/CarFooter.svg" alt="Доставим в день заказа" />
            <IconText>Доставим в день заказа</IconText>
          </FooterIcon>
          <FooterIcon>
            <ImgFooter src="/public/image/VectorFooter.svg" alt="100% миндальная мука и натуральные ингредиенты" />
            <IconText>100% <br />миндальная мука и натуральные ингредиенты</IconText>
          </FooterIcon>
          <FooterBottom>
            <p>© 2021 Макароншоп <br /> ООО "Квантум", Бишкек, улица Маршала Тухачевского, <br /> дом 22</p>
          </FooterBottom>
        </FooterIcons>
        <FooterLinks>
          <FooterSection>
            <SectionHeading>ИНФОРМАЦИЯ</SectionHeading>
            <SectionList>
              <ListItem><Link href="#">О компании</Link></ListItem>
              <ListItem><Link href="#">Гарантии вкуса и свежести</Link></ListItem>
              <ListItem><Link href="#">Доставка и оплата</Link></ListItem>
              <ListItem><Link href="#">Контакты</Link></ListItem>
            </SectionList>
          </FooterSection>
          <FooterSection>
            <SectionHeading>КАТАЛОГ</SectionHeading>
            <SectionList>
              <ListItem><Link href="#">Каталог десертов</Link></ListItem>
              <ListItem><Link href="#">Готовые наборы</Link></ListItem>
              <ListItem><Link href="#">Собрать свой набор</Link></ListItem>
              <ListItem><Link href="#">Наборы с печатью</Link></ListItem>
              <ListItem><Link href="#">Свадебные предложения</Link></ListItem>
              <ListItem><Link href="#">Акции</Link></ListItem>
            </SectionList>
          </FooterSection>
          <FooterSection>
            <SectionHeading>ДЛЯ БИЗНЕСА</SectionHeading>
            <SectionList>
              <ListItem><Link href="#">Корпоративные подарки</Link></ListItem>
              <ListItem><Link href="#">Для юридических лиц</Link></ListItem>
              <ListItem><Link href="#">Оптовикам</Link></ListItem>
            </SectionList>
          </FooterSection>
        </FooterLinks>
        <FooterContact>
          <FooterPhone>
            <ContactText><b>+7 (812) 309 82 88</b></ContactText>
            <ContactText>с 9:00 до 21:00</ContactText>
          </FooterPhone>
          <SocialIcons>
            <SocialIconLink href="#"><FaInstagram /></SocialIconLink>
            <SocialIconLink href="#"><FaFacebookF /></SocialIconLink>
            <SocialIconLink href="#"><FaVk /></SocialIconLink>
          </SocialIcons>
        </FooterContact>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  width: 1250px;
  background-color: #f5f5f5;
  padding: 70px 0;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  max-width: 1250px;
`;

const FooterIcons = styled.div`
  position: relative;
  display: flex;
  gap: 0.5em;
  justify-content: space-between;
`;

const ImgFooter = styled.img`
  width: 40wv;
  height: 40px;
`;

const FooterIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 110px;
  height: 100px;
  line-height: 1;
  text-align: center;
  align-items: center;
`;

const IconText = styled.p`
  margin-top: 10px;
  font-weight: 400;
  font-size: 12px;
  color: #333;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  flex: 1;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  width: 200px;
`;

const SectionHeading = styled.h3`
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
`;

const SectionList = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 14px;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;

const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.3em;
`;

const ContactText = styled.p`
  margin: 3px 0;
  text-align: left;
  font-size: 14px;
  color: #333;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.8em;
  margin-top: 10px;
`;

const SocialIconLink = styled.a`
  font-size: 20px;
  color: #333;
  &:hover {
    color: blue;
  }
`;

const FooterBottom = styled.div`
  font-size: 12px;
  color: #666;
  position: absolute;
  top: 12em;
`;

const FooterPhone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
