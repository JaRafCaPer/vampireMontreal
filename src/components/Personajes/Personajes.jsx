import React from "react";
import Image from 'react-bootstrap/Image';
import "./SobreNosotras.css";
import Helena from '../../assets/images/Helena Devereux (Tremere).png'
import Lucien from '../../assets/images/Lucien.webp'
import Isabella from '../../assets/images/Isabella.webp'
import Roderic from '../../assets/images/roderic.webp'
import Celestine from '../../assets/images/celestine.webp'



const Personajes = () => {
    return (
        <>
            <div className =" bgPjs">
    <div className ="containerPjs">
        <h1 className ="text-center display-1">Primogeniture Leaders, Aspirations, and Clan Power in Montreal</h1>

        
        <div className ="card2">
        <Image src={Helena} alt="" className ="card-img-top foto"/>
            <div className ="card-body">
                <h2 className ="card-title display-4">The Ambitious Tremere: Helena Devereux</h2>
                <p className ="card-text">Helena Devereux, the enigmatic leader of the Tremere Clan, wields a formidable grasp over the city's occult underbelly. The Tremere's mastery of blood magic grants them an edge that resonates through the very foundations of Montreal. Helena's control extends to both mystical and political domains, positioning the Tremere as influential puppeteers in the city's power struggles. Their aspirations for dominance are matched only by their capacity to manipulate hidden forces, leaving no doubt that the Tremere's arcane prowess molds Montreal's destiny with a potent, unseen hand.</p>
            </div>
        </div>

        
        <div className ="card2">
            <Image src={Lucien} alt="" className ="card-img-top foto"/>
            <div className ="card-body">
                <h2 className ="card-title display-4">The Ventrue Visionary: Lucien Dufresne</h2>
                <p className ="card-text">Lucien Dufresne, the shrewd Ventrue aristocrat, holds sway over Montreal's financial and political landscapes. The Ventrue's mastery of manipulation and resource management grants them a powerful leverage that transcends Kindred society. Lucien's calculated maneuvers orchestrate the city's power dynamics, crafting a web of influence that extends beyond Montreal's borders. The Ventrue's aspirations are driven by a desire for expansion and dominance, channeling their centuries-old legacy to weave a tapestry of control that envelops not just the Kindred but also mortal affairs, solidifying their status as Montreal's true powerbrokers.</p>
            </div>
        </div>

        
        <div className ="card2">
            <Image src={Isabella} alt="" className ="card-img-top foto"/>
            <div className ="card-body">
                <h2 className ="card-title display-4">The Toreador Muse: Isabella Moreau</h2>
                <p className ="card-text">Isabella Moreau, the captivating Toreador, thrives at the heart of Montreal's artistic scene. The Toreador's innate connection to beauty and culture grants them an influence that resonates through the city's social fabric. Isabella's aspirations go beyond the tangible, transcending mere power struggles. Her vision is one of inspiration and legacy, an aspiration to craft an immortal imprint on Montreal's collective soul. The Toreador's hold over the arts has granted them a unique avenue to shape perceptions and emotions, weaving a tapestry that intertwines with the hearts of both Kindred and mortal, painting the city's nights in hues of passion and creativity.</p>
            </div>
        </div>

        
        <div className ="card2">
            <Image src={Roderic} alt="" className ="card-img-top foto"/>
            <div className ="card-body">
                <h2 className ="card-title display-4">The Elusive Gangrel Nomad: Roderic Black</h2>
                <p className ="card-text">Roderic Black, the enigmatic Gangrel, embodies the primal essence of Montreal's untamed wilderness. The Gangrel's connection to nature grants them a survivalist's edge, enabling them to navigate the city's shadows with an uncanny understanding. Roderic's aspirations are woven with autonomy and instinct, aligning with the Gangrel's ethos of self-preservation. Despite their often solitary nature, the Gangrel's influence ripples beneath the surface as guardians of the city's unseen realms. Roderic's leadership fosters unity among the nomadic Kindred, weaving a thread of solidarity that bolsters the Gangrel's presence in the face of urban encroachment.</p>
            </div>
        </div>

        
        <div className ="card2">
            <Image src={Celestine} alt="" className ="card-img-top foto"/>
            <div className ="card-body">
                <h2 className ="card-title display-4">The Enigmatic Malkavian: Celestine Ravenscroft</h2>
                <p className ="card-text">Celestine Ravenscroft, the enigmatic Malkavian, dances on the precipice of reality and madness. The Malkavians' unique insight grants them an influence that defies conventional understanding. Celestine's aspirations transcend the linear paths of ambition, manifesting in cryptic manipulations that shape the city's very perception. The Malkavians' power lies in their ability to unveil hidden truths, making them invaluable allies—or dangerous foes. Celestine's enigmatic leadership ensures that the Malkavians navigate the Primogeniture's intricacies with a perspective that transcends the confines of sanity, leaving Montreal's reality and illusion forever intertwined.</p>
            </div>
        </div>

        
        <h2 className ="mt-4 display-2">Useful Characters in Montreal</h2>

        
        <div className ="card2">
            <div className ="card-body">
                <h2 className ="card-title display-4">The Elusive Informant - Mortal Hacker</h2>
                <p className ="card-text"><strong>Last Known Location:</strong> Undercity techno-haven.</p>
                <p className ="card-text"><strong>History:</strong> Former white-hat hacker turned rogue, exposes corruption in digital shadows.</p>
                <p className ="card-text"><strong>Function:</strong> Uncovers digital secrets, cyber espionage, and security breaches.</p>
                <p className ="card-text"><strong>Fit in the City:</strong> Operates covertly within underworld, seeking justice through digital means.</p>
            </div>
        </div>
        <div className ="card2">
            <div className ="card-body">
                <h2 className ="card-title display-4">Dimistra Balat - Ambitious Ventrue Businesswoman</h2>
                <p className ="card-text"><strong>History:</strong> Dimistra Balat, a shrewd and ambitious Ventrue, boasts a history drenched in corporate boardrooms and power plays. From her early years as a driven entrepreneur, she clawed her way to prominence with a relentless pursuit of success and dominance.</p>
                <p className ="card-text"><strong>Function in the Clan:</strong> Within the Ventrue clan, Dimistra stands as a testament to ambition. She leverages her business acumen to navigate the complex network of power, forging alliances and exploiting opportunities for her personal gain.</p>
                <p className ="card-text"><strong>Fit in the City:</strong> As an influential figure in the business world of Montreal, Dimistra's reputation as a cutthroat businesswoman precedes her. Her dealings extend far beyond the mundane, as she thrives in the shadows, orchestrating elaborate power plays and subjugating those who underestimate her hunger for dominance.</p>
            </div>
        </div>
        
        <div className ="card2">
            <div className ="card-body">
                <h2 className ="card-title display-4">The Enigmatic Art Collector - Toreador Ancilla</h2>
                <p className ="card-text"><strong>Last Known Location:</strong> Lavish penthouse-gallery.</p>
                <p className ="card-text"><strong>History:</strong> Renowned artist and connoisseur, manipulates art scene to suit ambitions.</p>
                <p className ="card-text"><strong>Function:</strong> Influences aesthetics, trends, and social perceptions with artistic preferences.</p>
                <p className ="card-text"><strong>Fit in the City:</strong> Holds sway over high society and artistic circles, manipulating perceptions.</p>
            </div>
        </div>

        
        <div className ="card2">
            <div className ="card-body">
                <h2 className ="card-title display-4">The Cryptic Seer - Malkavian Haruspex</h2>
                <p className ="card-text"><strong>Last Known Location:</strong> Abandoned chapel hideout.</p>
                <p className ="card-text"><strong>History:</strong> Touched by prophetic madness, decodes cryptic omens through rituals.</p>
                <p className ="card-text"><strong>Function:</strong> Offers insights into the city's future, unveiling hidden patterns and fates.</p>
                <p className ="card-text"><strong>Fit in the City:</strong> Mystical adviser, guiding seekers to truths beyond the mundane.</p>
            </div>
        </div>

        
        <div className ="card2">
            <div className ="card-body">
                <h2 className ="card-title display-4">The Shadow Broker - Nosferatu Informant</h2>
                <p className ="card-text"><strong>Last Known Location:</strong> Subterranean labyrinth.</p>
                <p className ="card-text"><strong>History:</strong> Nosferatu with an intricate informant network, trades secrets for favors.</p>
                <p className ="card-text"><strong>Function:</strong> Gathers intel on rival factions, mortals, and Kindred, leveraging information.</p>
                <p className ="card-text"><strong>Fit in the City:</strong> Neutral informant, dealing in hidden truths and alliances.</p>
            </div>
        </div>

        
        <div className ="card2">
            <div className ="card-body">
                <h2 className ="card-title display-4">The Disgruntled Smuggler - Caitiff Rogue</h2>
                <p className ="card-text"><strong>Last Known Location:</strong> Undercover nightclub in the Red District.</p>
                <p className ="card-text"><strong>History:</strong> Outcast, smuggles illicit goods beneath the Camarilla's radar.</p>
                <p className ="card-text"><strong>Function:</strong> Facilitates contraband, connects Kindred with resources.</p>
                <p className ="card-text"><strong>Fit in the City:</strong> Provides access to black-market resources for those on the edge.</p>
            </div>
        </div>

        
        <div className ="card2">
            <div className ="card-body">
                <h2 className ="card-title display-4">The Arcane Scholar - Tremere Scholar</h2>
                <p className ="card-text"><strong>Last Known Location:</strong> Esoteric library within Chantry.</p>
                <p className ="card-text"><strong>History:</strong> Disciplined scholar of blood magic, seeks mastery.</p>
                <p className ="card-text"><strong>Function:</strong> Develops potent rituals, arcane knowledge, and mystical insights.</p>
                <p className ="card-text"><strong>Fit in the City:</strong> Adviser to Tremere, safeguarding and expanding forbidden knowledge.</p>
            </div>
        </div>

        
        <div className ="card2">
            <div className ="card-body">
                <h2 className ="card-title display-4">The Underground Resistance Leader - Mortal Activist</h2>
                <p className ="card-text"><strong>Last Known Location:</strong> Hidden safehouses across the city.</p>
                <p className ="card-text"><strong>History:</strong> Advocate for social justice, organizes rebellions.</p>
                <p className ="card-text"><strong>Function:</strong> Mobilizes mortals and Kindred against exploitation.</p>
                <p className ="card-text"><strong>Fit in the City:</strong> Challenges power with passionate fervor.</p>
            </div>
        </div>

       
        <div className ="card2">
            <div className ="card-body">
                <h2 className ="card-title display-4">The Mercenary Merciful - Brujah Enforcer</h2>
                <p className ="card-text"><strong>Last Known Location:</strong> Fight club's back room.</p>
                <p className ="card-text"><strong>History:</strong> Brujah enforcer with a code, metes out justice.</p>
                <p className ="card-text"><strong>Function:</strong> Enforces agreements, resolves disputes, tempers aggression.</p>
                <p className ="card-text"><strong>Fit in the City:</strong> Mediates, safeguards against chaos.</p>
            </div>
        </div>

        
        <div className ="card2">
            <div className ="card-body">
                <h2 className ="card-title display-4">The Glamorous Socialite - Ventrue Harpy</h2>
                <p className ="card-text"><strong>Last Known Location:</strong> Exclusive gallery openings.</p>
                <p className ="card-text"><strong>History:</strong> Social influencer among Kindred, manipulates status.</p>
                <p className ="card-text"><strong>Function:</strong> Shapes reputations, controls information, fosters intrigue.</p>
                <p className ="card-text"><strong>Fit in the City:</strong> Sets tone, rewards entertainers, punishes dissenters.</p>
            </div>
        </div>


        <div className ="card2">
            <div className ="card-body">
                <h2 className ="card-title display-4">The Sage of Lupine Lore - Gangrel Elder</h2>
                <p className ="card-text"><strong>Last Known Location:</strong> Remote woodland sanctuary.</p>
                <p className ="card-text"><strong>History:</strong> Ancient Gangrel, embodies primal wisdom.</p>
                <p className ="card-text"><strong>Function:</strong> Offers guidance in wilderness, tracking, survival.</p>
                <p className ="card-text"><strong>Fit in the City:</strong> Bridges urban Kindred and untamed forces.</p>
            </div>
        </div>

        
        <div className ="card2">
            <div className ="card-body">
                <h2 className ="card-title display-4">The Reclusive Occultist - Tremere Hermit</h2>
                <p className ="card-text"><strong>Last Known Location:</strong> Isolated manor atop Mont Royal.</p>
                <p className ="card-text"><strong>History:</strong> Introverted Tremere, delves into esoteric pursuits.</p>
                <p className ="card-text"><strong>Function:</strong> Explores dark magic, hexes, curses for the right price.</p>
                <p className ="card-text"><strong>Fit in the City:</strong> Guards knowledge, provides forbidden magic.</p>
            </div>
        </div>

     
        <div className ="card2">
            <div className ="card-body">
                <h2 className ="card-title display-4">The Charismatic Reformer - Anarch Leader</h2>
                <p className ="card-text"><strong>Last Known Location:</strong> Abandoned industrial complex.</p>
                <p className ="card-text"><strong>History:</strong> Charismatic figurehead, seeks to liberate Kindred.</p>
                <p className ="card-text"><strong>Function:</strong> Organizes rebellions, spreads revolutionary ideas.</p>
                <p className ="card-text"><strong>Fit in the City:</strong> Stirs discontent, rallies against Camarilla.</p>
            </div>
        </div>

    </div>
</div>


        </>

    );
}

export default Personajes;