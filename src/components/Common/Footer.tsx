import GithubFooterIcon from "../SVG/Footer/GithubFooterIcon"
import MailFooterIcon from "../SVG/Footer/MailFooterIcon"
import MailIcon from "../SVG/Footer/VelogFooterIcon"

const Footer = () => {
  return (
    <footer className="max-w-screen-1xl px-4 md:px-8 mx-auto">
      <div className="container px-5 py-8 mx-auto flex  sm:flex-row ">
        <div className="flex gap-4 md:ml-auto ">
          <a
            href="https://velog.io/@anotherhoon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon/>
          </a>
          <a
            href="mailto:changhoon1030@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <MailFooterIcon/>
          </a>
          <a
            href="https://github.com/anotheranotherhoon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubFooterIcon/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer