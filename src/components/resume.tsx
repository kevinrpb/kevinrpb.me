import React from 'react'

import hash from 'object-hash'

import Icon from '@nextjs-utils/dynamic-icon'
import Link from '@nextjs-utils/sane-link'

interface Link {
  url: string
  label: string
  icon: string
}

interface SkillSet {
  title: string
  skills: string[]
}

interface SectionContentPlace {
  url: string
  label: string
}

interface SectionContent {
  title: string
  date: string
  show: boolean
  place: SectionContentPlace
  notes?: string[]
}

interface Section {
  title: string
  icon: string
  show: boolean
  contents: SectionContent[]
}

const Name: React.FC<{ name: string; position: string }> = ({ name, position }) => (
  <div id='name'>
    <h1 className='name'>{name}</h1>
    <span className='position'>{position}</span>
  </div>
)

const ResumeLink: React.FC<{ link: Link }> = ({ link: { url, icon, label } }) => (
  <Link href={url}>
    <Icon name={icon} className='icon' />
    <p>{label}</p>
  </Link>
)

const Links: React.FC<{ links: Link[] }> = ({ links }) => (
  <div id='links'>
    <span className='divider'></span>

    <div>
      {links.map((link) => (
        <ResumeLink key={link.url} link={link} />
      ))}
    </div>
    <span className='divider'></span>
  </div>
)

const Skills: React.FC<{ skillSets: SkillSet[] }> = ({ skillSets }) => (
  <div id='skills'>
    <div className='sets'>
      {skillSets.map(({ title, skills }) => {
        const key = hash(title)

        return (
          <>
            <h2 className='title' key={`${key}-title`}>
              {title}
            </h2>

            <div className='skills' key={`${key}-skills`}>
              {skills.map((label) => (
                <div className='skill' key={hash(label)}>
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </>
        )
      })}
    </div>
    <span className='divider'></span>
  </div>
)

const Sections: React.FC<{ sections: Section[] }> = ({ sections }) => (
  <div id='sections'>
    {sections
      .filter(({ show }) => show)
      .map(({ title, icon, contents }) => (
        <section key={title}>
          <div className='title'>
            <Icon name={icon} className='icon' />
            <h2>{title}</h2>
          </div>

          <div className='content'>
            {contents
              .filter(({ show }) => show)
              .map(({ title, date, place: { url, label }, notes }) => (
                <div key={`${title} - ${date}`}>
                  <h3 className='title'>{title}</h3>
                  <div className='info'>
                    <p className='date'>{date}</p>
                    <p className='place'>
                      <Link href={url}>{label}</Link>
                    </p>
                  </div>
                  {notes && (
                    <div className='notes'>
                      {notes.map((note) =>
                        note.startsWith('> ') ? (
                          <p
                            className='item'
                            dangerouslySetInnerHTML={{ __html: note.slice(2) }}
                            key={hash(note)}
                          />
                        ) : (
                          <p dangerouslySetInnerHTML={{ __html: note }} key={hash(note)} />
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </section>
      ))}
  </div>
)

interface ResumeProps {
  name: string
  position: string
  links: Link[]
  skillSets: SkillSet[]
  sections: Section[]
}

const Resume: React.FC<ResumeProps> = ({ name, position, links, skillSets, sections }) => {
  return (
    <>
      <Name name={name} position={position} />
      <Links links={links} />
      <Skills skillSets={skillSets} />
      <Sections sections={sections} />
    </>
  )
}

export default Resume
