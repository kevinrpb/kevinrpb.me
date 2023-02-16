import React from 'react'

import hash from 'object-hash'

import Icon from '@nextjs-utils/dynamic-icon'
import Link from '@nextjs-utils/sane-link'

import getEmailAddress from '@lib/mailobfuscate'

const Name = ({ name }) => (
  <div id='name'>
    <h1>{name}</h1>
  </div>
)

const Links = ({ links }) => (
  <div id='links'>
    <span className='divider'></span>

    <div>
      {links.map(({ url, icon, label }) => (
        <Link href={url === '__mail__' ? `mailto:${getEmailAddress()}` : url} key={url}>
          <Icon name={icon} className='icon' />
          <p>{label === '__mail__' ? `${getEmailAddress()}` : label}</p>
        </Link>
      ))}
    </div>
    <span className='divider'></span>
  </div>
)

const Skills = ({ skillSets }) => (
  <div id='skills'>
    <div className='title mobile'>
      <Icon name='FiCode' className='icon' />
      <h2>Skills</h2>
    </div>

    {skillSets.map(({ title, skills }) => (
      <div className='set' key={title}>
        <h2>{title}</h2>

        {skills.map(({ label, percent }) => (
          <div className='skill' key={label}>
            <p>{label}</p>
            {percent && <span className={`pill percentage-${percent} shadow`}></span>}
          </div>
        ))}
      </div>
    ))}
  </div>
)

const Sections = ({ sections }) => (
  <div id='sections'>
    {sections
      .filter(({ shows }) => shows)
      .map(({ title, icon, contents }) => (
        <section key={title}>
          <div className='title'>
            <Icon name={icon} className='icon' />
            <h2>{title}</h2>
          </div>

          <div className='content'>
            {contents
              .filter(({ shows }) => shows)
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

const Resume = ({ name, links, skillSets, sections }) => {
  return (
    <>
      <Name name={name} />
      <Links links={links} />
      <Skills skillSets={skillSets} />
      <Sections sections={sections} />
    </>
  )
}

export default Resume
