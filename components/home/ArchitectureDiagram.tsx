import { cn } from "@/lib/cn";

const connectors = [
  { id: "c1", d: "M210 68 V100" },
  { id: "c2", d: "M210 140 V176" },
  { id: "c3", d: "M210 216 V248" },
  { id: "c4", d: "M154 196 H90" },
  { id: "c5", d: "M266 196 H330" },
  { id: "c6", d: "M90 196 V176" },
  { id: "c7", d: "M330 196 V176" },
  { id: "c8", d: "M210 288 V320" },
  { id: "c9", d: "M266 340 H310" },
  { id: "c10", d: "M210 360 V392" },
] as const;

const packets = [
  { id: "p1", path: "M210 68 V100", duration: 3.8, delay: 0 },
  { id: "p2", path: "M210 140 V176", duration: 4.2, delay: 0.6 },
  { id: "p3", path: "M154 196 H90", duration: 4.6, delay: 1.1 },
  { id: "p4", path: "M266 196 H330", duration: 4.6, delay: 1.4 },
  { id: "p5", path: "M210 216 V248", duration: 4.0, delay: 1.8 },
  { id: "p6", path: "M210 288 V320", duration: 4.4, delay: 2.3 },
  { id: "p7", path: "M266 340 H310", duration: 4.8, delay: 2.8 },
  { id: "p8", path: "M210 360 V392", duration: 4.2, delay: 3.2 },
] as const;

type ArchitectureDiagramProps = {
  className?: string;
};

export function ArchitectureDiagram({ className }: ArchitectureDiagramProps) {
  return (
    <div
      className={cn(
        "relative aspect-[5/6] w-full max-w-[28rem]",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 420 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <title>System architecture</title>

        <g
          stroke="currentColor"
          className="text-foreground/[0.09]"
          strokeWidth="1"
        >
          {connectors.map((connector) => (
            <path key={connector.id} d={connector.d} />
          ))}
        </g>

        <g className="arch-packets">
          {packets.map((packet) => (
            <circle key={packet.id} r="1.75" className="fill-primary/25">
              <animateMotion
                path={packet.path}
                dur={`${packet.duration}s`}
                begin={`${packet.delay}s`}
                repeatCount="indefinite"
                rotate="auto"
              />
            </circle>
          ))}
        </g>

        <Node x={166} y={28} width={88} label="Edge" />
        <Node x={142} y={100} width={136} label="Gateway" accent />
        <Node x={42} y={176} width={96} label="Auth" />
        <Node x={164} y={176} width={92} label="Services" />
        <Node x={282} y={176} width={96} label="Events" />
        <Node x={154} y={248} width={112} label="Workers" />
        <Node x={310} y={320} width={88} label="Queue" />
        <Node x={166} y={392} width={88} label="Store" />
      </svg>
    </div>
  );
}

function Node({
  x,
  y,
  width,
  label,
  accent = false,
}: {
  x: number;
  y: number;
  width: number;
  label: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={40}
        rx={6}
        className="fill-surface"
        stroke="currentColor"
        strokeWidth={1}
        style={{
          color: accent
            ? "color-mix(in srgb, var(--primary) 40%, transparent)"
            : "color-mix(in srgb, var(--foreground) 12%, transparent)",
        }}
      />
      <text
        x={x + width / 2}
        y={y + 25}
        textAnchor="middle"
        fill="currentColor"
        className="text-foreground/85"
        style={{
          fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
          fontSize: 12,
        }}
      >
        {label}
      </text>
    </g>
  );
}
