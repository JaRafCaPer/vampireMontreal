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
            <div class=" bgPjs">
    <div class="containerPjs">
        <h1 class="text-center">Primogeniture Leaders, Aspirations, and Clan Power in Montreal</h1>

        
        <div class="card">
        <Image src={Helena} alt="" class="card-img-top foto"/>
            <div class="card-body">
                <h2 class="card-title">The Ambitious Tremere: Helena Devereux</h2>
                <p class="card-text">Helena Devereux, the enigmatic leader of the Tremere Clan, wields a formidable grasp over the city's occult underbelly. The Tremere's mastery of blood magic grants them an edge that resonates through the very foundations of Montreal. Helena's control extends to both mystical and political domains, positioning the Tremere as influential puppeteers in the city's power struggles. Their aspirations for dominance are matched only by their capacity to manipulate hidden forces, leaving no doubt that the Tremere's arcane prowess molds Montreal's destiny with a potent, unseen hand.</p>
            </div>
        </div>

        
        <div class="card">
            <Image src={Lucien} alt="" class="card-img-top foto"/>
            <div class="card-body">
                <h2 class="card-title">The Ventrue Visionary: Lucien Dufresne</h2>
                <p class="card-text">Lucien Dufresne, the shrewd Ventrue aristocrat, holds sway over Montreal's financial and political landscapes. The Ventrue's mastery of manipulation and resource management grants them a powerful leverage that transcends Kindred society. Lucien's calculated maneuvers orchestrate the city's power dynamics, crafting a web of influence that extends beyond Montreal's borders. The Ventrue's aspirations are driven by a desire for expansion and dominance, channeling their centuries-old legacy to weave a tapestry of control that envelops not just the Kindred but also mortal affairs, solidifying their status as Montreal's true powerbrokers.</p>
            </div>
        </div>

        
        <div class="card">
            <Image src={Isabella} alt="" class="card-img-top foto"/>
            <div class="card-body">
                <h2 class="card-title">The Toreador Muse: Isabella Moreau</h2>
                <p class="card-text">Isabella Moreau, the captivating Toreador, thrives at the heart of Montreal's artistic scene. The Toreador's innate connection to beauty and culture grants them an influence that resonates through the city's social fabric. Isabella's aspirations go beyond the tangible, transcending mere power struggles. Her vision is one of inspiration and legacy, an aspiration to craft an immortal imprint on Montreal's collective soul. The Toreador's hold over the arts has granted them a unique avenue to shape perceptions and emotions, weaving a tapestry that intertwines with the hearts of both Kindred and mortal, painting the city's nights in hues of passion and creativity.</p>
            </div>
        </div>

        
        <div class="card">
            <Image src={Roderic} alt="" class="card-img-top foto"/>
            <div class="card-body">
                <h2 class="card-title">The Elusive Gangrel Nomad: Roderic Black</h2>
                <p class="card-text">Roderic Black, the enigmatic Gangrel, embodies the primal essence of Montreal's untamed wilderness. The Gangrel's connection to nature grants them a survivalist's edge, enabling them to navigate the city's shadows with an uncanny understanding. Roderic's aspirations are woven with autonomy and instinct, aligning with the Gangrel's ethos of self-preservation. Despite their often solitary nature, the Gangrel's influence ripples beneath the surface as guardians of the city's unseen realms. Roderic's leadership fosters unity among the nomadic Kindred, weaving a thread of solidarity that bolsters the Gangrel's presence in the face of urban encroachment.</p>
            </div>
        </div>

        
        <div class="card">
            <Image src={Celestine} alt="" class="card-img-top foto"/>
            <div class="card-body">
                <h2 class="card-title">The Enigmatic Malkavian: Celestine Ravenscroft</h2>
                <p class="card-text">Celestine Ravenscroft, the enigmatic Malkavian, dances on the precipice of reality and madness. The Malkavians' unique insight grants them an influence that defies conventional understanding. Celestine's aspirations transcend the linear paths of ambition, manifesting in cryptic manipulations that shape the city's very perception. The Malkavians' power lies in their ability to unveil hidden truths, making them invaluable allies—or dangerous foes. Celestine's enigmatic leadership ensures that the Malkavians navigate the Primogeniture's intricacies with a perspective that transcends the confines of sanity, leaving Montreal's reality and illusion forever intertwined.</p>
            </div>
        </div>

        
        <h2 class="mt-4">Useful Characters in Montreal</h2>

        
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">The Elusive Informant - Mortal Hacker</h2>
                <p class="card-text"><strong>Last Known Location:</strong> Undercity techno-haven.</p>
                <p class="card-text"><strong>History:</strong> Former white-hat hacker turned rogue, exposes corruption in digital shadows.</p>
                <p class="card-text"><strong>Function:</strong> Uncovers digital secrets, cyber espionage, and security breaches.</p>
                <p class="card-text"><strong>Fit in the City:</strong> Operates covertly within underworld, seeking justice through digital means.</p>
            </div>
        </div>

        
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">The Enigmatic Art Collector - Toreador Ancilla</h2>
                <p class="card-text"><strong>Last Known Location:</strong> Lavish penthouse-gallery.</p>
                <p class="card-text"><strong>History:</strong> Renowned artist and connoisseur, manipulates art scene to suit ambitions.</p>
                <p class="card-text"><strong>Function:</strong> Influences aesthetics, trends, and social perceptions with artistic preferences.</p>
                <p class="card-text"><strong>Fit in the City:</strong> Holds sway over high society and artistic circles, manipulating perceptions.</p>
            </div>
        </div>

        
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">The Cryptic Seer - Malkavian Haruspex</h2>
                <p class="card-text"><strong>Last Known Location:</strong> Abandoned chapel hideout.</p>
                <p class="card-text"><strong>History:</strong> Touched by prophetic madness, decodes cryptic omens through rituals.</p>
                <p class="card-text"><strong>Function:</strong> Offers insights into the city's future, unveiling hidden patterns and fates.</p>
                <p class="card-text"><strong>Fit in the City:</strong> Mystical adviser, guiding seekers to truths beyond the mundane.</p>
            </div>
        </div>

        
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">The Shadow Broker - Nosferatu Informant</h2>
                <p class="card-text"><strong>Last Known Location:</strong> Subterranean labyrinth.</p>
                <p class="card-text"><strong>History:</strong> Nosferatu with an intricate informant network, trades secrets for favors.</p>
                <p class="card-text"><strong>Function:</strong> Gathers intel on rival factions, mortals, and Kindred, leveraging information.</p>
                <p class="card-text"><strong>Fit in the City:</strong> Neutral informant, dealing in hidden truths and alliances.</p>
            </div>
        </div>

        
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">The Disgruntled Smuggler - Caitiff Rogue</h2>
                <p class="card-text"><strong>Last Known Location:</strong> Undercover nightclub in the Red District.</p>
                <p class="card-text"><strong>History:</strong> Outcast, smuggles illicit goods beneath the Camarilla's radar.</p>
                <p class="card-text"><strong>Function:</strong> Facilitates contraband, connects Kindred with resources.</p>
                <p class="card-text"><strong>Fit in the City:</strong> Provides access to black-market resources for those on the edge.</p>
            </div>
        </div>

        
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">The Arcane Scholar - Tremere Scholar</h2>
                <p class="card-text"><strong>Last Known Location:</strong> Esoteric library within Chantry.</p>
                <p class="card-text"><strong>History:</strong> Disciplined scholar of blood magic, seeks mastery.</p>
                <p class="card-text"><strong>Function:</strong> Develops potent rituals, arcane knowledge, and mystical insights.</p>
                <p class="card-text"><strong>Fit in the City:</strong> Adviser to Tremere, safeguarding and expanding forbidden knowledge.</p>
            </div>
        </div>

        
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">The Underground Resistance Leader - Mortal Activist</h2>
                <p class="card-text"><strong>Last Known Location:</strong> Hidden safehouses across the city.</p>
                <p class="card-text"><strong>History:</strong> Advocate for social justice, organizes rebellions.</p>
                <p class="card-text"><strong>Function:</strong> Mobilizes mortals and Kindred against exploitation.</p>
                <p class="card-text"><strong>Fit in the City:</strong> Challenges power with passionate fervor.</p>
            </div>
        </div>

       
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">The Mercenary Merciful - Brujah Enforcer</h2>
                <p class="card-text"><strong>Last Known Location:</strong> Fight club's back room.</p>
                <p class="card-text"><strong>History:</strong> Brujah enforcer with a code, metes out justice.</p>
                <p class="card-text"><strong>Function:</strong> Enforces agreements, resolves disputes, tempers aggression.</p>
                <p class="card-text"><strong>Fit in the City:</strong> Mediates, safeguards against chaos.</p>
            </div>
        </div>

        
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">The Glamorous Socialite - Ventrue Harpy</h2>
                <p class="card-text"><strong>Last Known Location:</strong> Exclusive gallery openings.</p>
                <p class="card-text"><strong>History:</strong> Social influencer among Kindred, manipulates status.</p>
                <p class="card-text"><strong>Function:</strong> Shapes reputations, controls information, fosters intrigue.</p>
                <p class="card-text"><strong>Fit in the City:</strong> Sets tone, rewards entertainers, punishes dissenters.</p>
            </div>
        </div>


        <div class="card">
            <div class="card-body">
                <h2 class="card-title">The Sage of Lupine Lore - Gangrel Elder</h2>
                <p class="card-text"><strong>Last Known Location:</strong> Remote woodland sanctuary.</p>
                <p class="card-text"><strong>History:</strong> Ancient Gangrel, embodies primal wisdom.</p>
                <p class="card-text"><strong>Function:</strong> Offers guidance in wilderness, tracking, survival.</p>
                <p class="card-text"><strong>Fit in the City:</strong> Bridges urban Kindred and untamed forces.</p>
            </div>
        </div>

        
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">The Reclusive Occultist - Tremere Hermit</h2>
                <p class="card-text"><strong>Last Known Location:</strong> Isolated manor atop Mont Royal.</p>
                <p class="card-text"><strong>History:</strong> Introverted Tremere, delves into esoteric pursuits.</p>
                <p class="card-text"><strong>Function:</strong> Explores dark magic, hexes, curses for the right price.</p>
                <p class="card-text"><strong>Fit in the City:</strong> Guards knowledge, provides forbidden magic.</p>
            </div>
        </div>

     
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">The Charismatic Reformer - Anarch Leader</h2>
                <p class="card-text"><strong>Last Known Location:</strong> Abandoned industrial complex.</p>
                <p class="card-text"><strong>History:</strong> Charismatic figurehead, seeks to liberate Kindred.</p>
                <p class="card-text"><strong>Function:</strong> Organizes rebellions, spreads revolutionary ideas.</p>
                <p class="card-text"><strong>Fit in the City:</strong> Stirs discontent, rallies against Camarilla.</p>
            </div>
        </div>

    </div>
</div>


        </>

    );
}

export default Personajes;