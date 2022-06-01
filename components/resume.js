import React from 'react'

import Icon from '@components/icon'
import SaneLink from './link'

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
        <SaneLink href={url} key={url}>
          <Icon name={icon} />
          <p>{label}</p>
        </SaneLink>
      ))}
    </div>
    <span className='divider'></span>
  </div>
)

const Skills = ({ skillSets }) => (
  <div id='skills'>
    <div className='title mobile'>
      <Icon name='code' />
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
    {sections.map(({ title, icon, contents }) => (
      <section key={title}>
        <div className='title'>
          <Icon name={icon} />
          <h2>{title}</h2>
        </div>

        <div className='content'>
          {contents.map(({ title, date, place: { url, label }, notes }) => (
            <div key={`${title} - ${date}`}>
              <h3 className='title'>{title}</h3>
              <div className='info'>
                <p className='date'>{date}</p>
                <p className='place'>
                  <SaneLink href={url}>{label}</SaneLink>
                </p>
              </div>
              {notes && (
                <div className='notes'>
                  {notes.map((note) =>
                    note.startsWith('> ') ? (
                      <p className='item' dangerouslySetInnerHTML={{ __html: note.slice(2) }} />
                    ) : (
                      <p dangerouslySetInnerHTML={{ __html: note }} />
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
  console.log(name)

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