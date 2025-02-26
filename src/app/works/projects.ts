import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'BlockLite',
    description: 'Minimal Blockchain Implementation',
    longDescription:
      'A lightweight blockchain implementation featuring a Proof-of-Work consensus mechanism for secure, immutable transaction recording. Includes a UTXO-based transaction model with cryptographic signatures and persistent storage using BoltDB.',
    image: '/works/projects/blocklite.jpg',
    link: 'https://github.com/saatvik333/blocklite-go',
    technologies: ['Go', 'BoltDB', 'Cryptography', 'Blockchain'],
    features: [
      'Proof-of-Work consensus mechanism for secure transaction validation',
      'UTXO-based transaction model with cryptographic signatures',
      'Persistent storage using BoltDB for efficient querying',
      'Prevention of double-spending through secure P2P transactions',
    ],
  },
  {
    title: 'BitTorrent Client',
    description: 'CLI BitTorrent Client Implementation',
    longDescription:
      'A command-line BitTorrent client built from scratch that implements core peer-to-peer file-sharing functionalities. Features peer discovery, TCP-based communication, and optimized multi-threaded downloads with data integrity verification.',
    image: '/works/projects/bittorrent-client.png',
    images: ['/works/projects/bittorrent-client-1.png'],
    link: 'https://github.com/saatvik333/bittorrent-client',
    technologies: ['Go', 'TCP/IP', 'HTTP', 'Multi-threading'],
    features: [
      'Peer discovery via HTTP tracker communication',
      'TCP-based peer connections and data transfer',
      'Multi-threaded download optimization',
      'Data integrity verification using SHA-1 hashing',
    ],
  },
];
