"use client";

import { memo, useEffect, useMemo, useRef, useState } from "react";
import {
  Background,
  BackgroundVariant,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  useNodesInitialized,
  useReactFlow,
  type Edge,
  type Node,
  type NodeProps,
  type NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experiences, type ExperienceItem } from "@/data/resume";

type ExperienceNodeData = ExperienceItem & {
  index: number;
  total: number;
  // XYFlow's `Node<TData>` requires `TData extends Record<string, unknown>`.
  [key: string]: unknown;
};

type ExperienceNode = Node<ExperienceNodeData, "experience">;

function badgeVariant(type: ExperienceItem["type"], current: boolean) {
  if (current) return "success" as const;
  if (type === "Founder") return "accent" as const;
  return "outline" as const;
}

const ExperienceNodeView = memo(function ExperienceNodeView({
  data,
}: NodeProps<ExperienceNode>) {
  const {
    index,
    total,
    current,
    company,
    role,
    type,
    location,
    startDate,
    endDate,
    summary,
    highlights,
    stack,
  } = data;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group w-full rounded-2xl border border-border bg-card/90 p-6 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.85)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_0_36px_-8px_rgba(0,212,255,0.4)]"
    >
      {index > 0 && (
        <Handle
          type="target"
          position={Position.Top}
          className="!h-2.5 !w-2.5 !border-0 !bg-primary"
          isConnectable={false}
        />
      )}

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30"
          >
            <Briefcase className="h-4 w-4" />
            {current && (
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-card" />
              </span>
            )}
          </span>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {String(total - index).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <h3 className="font-display text-xl font-semibold leading-tight text-foreground">
              {company}
            </h3>
          </div>
        </div>

        <Badge
          variant={badgeVariant(type, current)}
          className="font-mono text-[10px] uppercase tracking-[0.14em]"
        >
          {type}
        </Badge>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{role}</span>
        <span className="inline-flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" aria-hidden />
          {startDate} — {endDate}
        </span>
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          {location}
        </span>
      </div>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        {summary}
      </p>

      <ul className="mt-4 space-y-2.5 text-[15px]">
        {highlights.map((highlight, i) => (
          <li key={i} className="flex gap-3">
            <span
              aria-hidden
              className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
            />
            <span className="text-foreground/90">{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {index < total - 1 && (
        <Handle
          type="source"
          position={Position.Bottom}
          className="!h-2.5 !w-2.5 !border-0 !bg-primary"
          isConnectable={false}
        />
      )}
    </motion.article>
  );
});

const nodeTypes: NodeTypes = { experience: ExperienceNodeView };

function estimateNodeHeight(exp: ExperienceItem, nodeWidth: number) {
  const charsPerLine = Math.max(32, Math.floor(nodeWidth / 7.4));
  const summaryLines = Math.ceil(exp.summary.length / charsPerLine);
  const highlightLines = exp.highlights.reduce(
    (sum, line) => sum + Math.max(1, Math.ceil(line.length / charsPerLine)),
    0,
  );
  return 230 + summaryLines * 24 + highlightLines * 32 + 44;
}

/** Grow the page-height canvas to the real node bounds so the window scrolls, not the graph. */
function SyncFlowHeight({ onHeight }: { onHeight: (height: number) => void }) {
  const initialized = useNodesInitialized();
  const { getNodes } = useReactFlow();

  useEffect(() => {
    if (!initialized) return;
    const bottom = getNodes().reduce((max, node) => {
      const height = node.measured?.height ?? 0;
      return Math.max(max, node.position.y + height);
    }, 0);
    if (bottom > 0) onHeight(Math.ceil(bottom + 40));
  }, [initialized, getNodes, onHeight]);

  return null;
}

export function ExperienceFlow() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [frameWidth, setFrameWidth] = useState(640);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;

    const sync = () => setFrameWidth(el.clientWidth);
    sync();

    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setMeasuredHeight(null);
  }, [frameWidth]);

  const { nodes, edges, estimatedHeight } = useMemo(() => {
    const total = experiences.length;
    const isWide = frameWidth >= 720;
    const nodeWidth = isWide
      ? Math.min(560, Math.max(420, frameWidth * 0.56))
      : Math.max(280, frameWidth - 8);
    const staggerX = Math.max(
      0,
      Math.min(frameWidth - nodeWidth - 16, isWide ? Math.max(220, frameWidth * 0.3) : 40),
    );
    const gap = isWide ? 128 : 96;
    let y = 8;

    const nodes: ExperienceNode[] = experiences.map((exp, index) => {
      const nodeHeight = estimateNodeHeight(exp, nodeWidth);
      const node: ExperienceNode = {
        id: exp.id,
        type: "experience",
        position: {
          x: index % 2 === 0 ? 8 : 8 + staggerX,
          y,
        },
        data: { ...exp, index, total },
        draggable: false,
        selectable: false,
        style: { width: nodeWidth },
      };
      y += nodeHeight + gap;
      return node;
    });

    const edges: Edge[] = experiences.slice(0, -1).map((exp, index) => ({
      id: `${exp.id}->${experiences[index + 1].id}`,
      source: exp.id,
      target: experiences[index + 1].id,
      type: "smoothstep",
      animated: true,
      pathOptions: { borderRadius: 18, offset: 36 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "hsl(191 100% 50% / 0.85)",
        width: 18,
        height: 18,
      },
      style: { stroke: "hsl(191 100% 50% / 0.75)", strokeWidth: 2 },
    }));

    return { nodes, edges, estimatedHeight: y };
  }, [frameWidth]);

  return (
    <div
      ref={frameRef}
      className="relative w-full"
      style={{ height: measuredHeight ?? estimatedHeight }}
    >
      <ReactFlow
        className="!bg-transparent"
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        minZoom={1}
        maxZoom={1}
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        autoPanOnNodeDrag={false}
        selectionOnDrag={false}
      >
        <SyncFlowHeight onHeight={setMeasuredHeight} />
        <Background
          variant={BackgroundVariant.Dots}
          gap={22}
          size={1.2}
          color="rgba(255,255,255,0.05)"
        />
      </ReactFlow>
    </div>
  );
}
