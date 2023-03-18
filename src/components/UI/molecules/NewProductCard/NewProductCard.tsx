import { Carousel } from 'react-responsive-carousel'
import {
  CardStyled,
  ImageCardStyled,
  StyledCarrouselContainer,
  StyledIconContainer,
  StyledPriceContainer,
  StyledTitle,
  StyledTitleAndButtonsContainer,
} from './NewProductCardStyles'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Price } from '../../atoms/Price/Price'
import { BiLinkExternal } from 'react-icons/bi'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import { toast } from 'react-toastify'
import { IconButton } from '../../atoms/IconButton/IconButton'
import { MySkeleton } from '../../atoms/Skeleton/Skeleton'

interface ProductCardProps {
  link?: string
  pictures?: string[]
  price?: number
  isSqueleton?: boolean
  title?: string
}

export const NewProductCard = ({
  title = '',
  price = 0,
  pictures = [],
  link = '',
  isSqueleton = false,
}: ProductCardProps) => {
  const goToPage = () => {
    window.open(link, '_blank')
  }

  const copyClipboard = () => {
    toast.success('Link copiado al portapapeles')
    navigator.clipboard.writeText(link)
  }

  return (
    <>
      {isSqueleton ? (
        <MySkeleton height={'180px'} quantity={1} />
      ) : (
        <CardStyled>
          <StyledCarrouselContainer>
            <Carousel
              emulateTouch={false}
              showArrows
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              swipeable={false}
            >
              {pictures.map((picture, index) => (
                <div key={index}>
                  <ImageCardStyled src={picture} />
                </div>
              ))}
            </Carousel>
          </StyledCarrouselContainer>
          <StyledTitleAndButtonsContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledIconContainer>
              <IconButton icon={<HiOutlineClipboardCopy size="20px" />} onClick={copyClipboard} />
              <IconButton
                icon={<BiLinkExternal size="19px" />}
                onClick={goToPage}
                style={{ marginTop: '2.5px' }}
              />
            </StyledIconContainer>
          </StyledTitleAndButtonsContainer>
          <StyledPriceContainer>
            <Price color="gray">{price}</Price>
          </StyledPriceContainer>
        </CardStyled>
      )}
    </>
  )
}
