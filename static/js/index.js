window.HELP_IMPROVE_VIDEOJS = false;

const embeddedCSVData = `Model,Size,Method,VideoNIAH_Edit,VideoNIAH_Insert1,VideoNIAH_Insert2,VideoNIAH_Avg,NExT-QA_MC,NExT-QA_OE,NExT-QA_Avg,VideoMME_wo_sub,VideoMME_w_sub,VideoMME_Avg,EgoSchema,MVBench,Average\nLlava-Video,7B,Original,90.7,50.7,88.0,76.5,83.2,32.1,57.7,63.2,69.8,66.5,53.4,61.9,65.9\nLlava-Video,7B,StreamingLLM,26.0,15.3,28.7,23.3,79.0,30.3,54.7,54.7,65.5,60.1,46.6,55.2,44.6\nLlava-Video,7B,FastV,69.3,28.7,76.7,58.2,81.1,31.2,56.2,58.7,67.0,62.9,50.1,58.0,57.9\nLlava-Video,7B,PruMerge,83.3,36.0,83.3,67.5,79.4,30.8,55.1,60.0,68.6,64.3,50.7,56.0,60.9\nLlava-Video,7B,FrameFusion,90.0,48.7,87.3,75.3,81.8,31.7,56.8,61.3,69.9,65.6,53.0,59.7,64.8\nLlava-Video,72B,Original,89.3,66.0,88.0,81.1,85.3,32.3,58.8,70.9,77.3,74.1,65.0,63.9,70.9\nLlava-Video,72B,StreamingLLM,33.3,20.0,35.3,29.5,81.9,30.6,56.3,62.6,72.9,67.8,60.2,58.0,50.5\nLlava-Video,72B,FastV,22.0,48.7,77.3,49.3,83.7,31.5,57.6,65.9,73.7,69.8,62.6,61.7,58.6\nLlava-Video,72B,PruMerge,85.3,58.0,86.0,76.4,82.0,31.4,56.7,66.7,74.8,70.8,62.6,58.6,67.3\nLlava-Video,72B,FrameFusion,90.0,63.3,88.0,80.4,84.6,32.0,58.3,69.0,76.7,72.9,63.2,63.0,70.0\nNVILA,2B,Original,90.0,22.0,87.3,66.4,71.2,6.6,38.9,50.9,53.2,52.1,42.3,50.7,52.7\nNVILA,2B,StreamingLLM,26.0,12.7,34.7,24.5,69.0,5.8,37.4,45.7,50.1,47.9,40.7,49.1,37.1\nNVILA,2B,FastV,50.7,14.7,56.7,40.7,70.7,7.2,39.0,46.7,50.6,48.7,41.1,50.1,43.2\nNVILA,2B,PruMerge,27.3,31.3,81.3,46.6,67.7,11.1,39.4,47.3,50.4,48.9,42.2,48.0,45.2\nNVILA,2B,FrameFusion,89.3,27.3,87.3,68.0,71.8,20.1,46.0,50.4,53.1,51.8,45.2,49.5,54.9\nNVILA,8B,Original,98.7,40.7,100.0,79.8,81.7,33.0,57.4,63.9,68.3,66.1,52.0,67.5,67.3\nNVILA,8B,StreamingLLM,30.0,17.3,41.3,29.5,78.4,30.8,54.6,54.3,63.7,59.0,46.2,58.1,46.7\nNVILA,8B,FastV,87.3,33.3,90.7,70.4,80.4,32.5,56.5,59.5,66.8,63.2,50.5,64.5,62.8\nNVILA,8B,PruMerge,4.7,32.0,93.3,43.3,77.1,31.4,54.3,56.9,65.1,61.0,49.4,57.9,52.0\nNVILA,8B,FrameFusion,96.0,38.0,98.7,77.6,80.7,32.5,56.6,61.1,68.2,64.7,52.5,65.0,65.9\nNVILA,15B,Original,95.3,42.0,100.0,79.1,78.7,30.9,54.8,65.8,72.3,69.1,58.2,60.5,67.1\nNVILA,15B,StreamingLLM,34.0,18.7,34.0,28.9,74.0,28.5,51.3,58.5,65.1,61.8,53.7,55.0,46.8\nNVILA,15B,FastV,48.7,24.7,80.7,51.4,77.0,30.6,53.8,60.6,69.1,64.9,56.7,57.3,56.2\nNVILA,15B,PruMerge,19.3,43.3,98.0,53.5,72.4,30.0,51.2,59.3,68.4,63.9,52.3,52.8,55.1\nNVILA,15B,FrameFusion,94.0,52.7,99.3,82.0,77.7,31.2,54.5,63.5,70.8,67.2,57.8,58.4,67.3\nMiniCPM-V,8B,Original,88.7,36.7,88.7,71.4,78.9,13.8,46.4,58.5,60.3,59.4,53.4,55.0,59.3\nMiniCPM-V,8B,StreamingLLM,22.0,15.3,28.7,22.0,76.0,23.2,49.6,53.8,56.7,55.3,48.2,51.3,41.7\nMiniCPM-V,8B,FastV,82.7,26.7,71.3,60.2,78.0,14.8,46.4,56.7,58.2,57.5,51.8,53.2,54.8\nMiniCPM-V,8B,FrameFusion,89.3,41.3,89.3,73.3,78.2,16.3,47.3,57.4,59.5,58.5,52.3,53.6,59.7`;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // Initialize Carousel
    const carousel = bulmaCarousel.attach('#results-carousel', {
      slidesToScroll: 1,
      slidesToShow: 1,
      infinite: true,
      autoplay: false,
      navigation: true,
      gap: 60
    });

    // Add carousel slide change event listener
    if (carousel && carousel.length > 0) {
      carousel[0].on('slide:change', function() {
        // Reset and restart loading animation when slide changes
        resetCarouselLoading();
      });
    }

    // Initialize slider
    const slider = document.getElementById('interpolation-slider');
    const wrapper = document.getElementById('interpolation-image-wrapper');
    
    // Total number of frames (0-63 based on the files)
    const totalFrames = 63;
    
    function updateImage(value) {
      const frameNumber = Math.round((totalFrames * value) / 100);
      wrapper.innerHTML = `
        <div class="columns is-centered">
          <div class="column">
            <img src="./static/images/tom_jerry/frame_${frameNumber}.png" class="interpolation-image">
          </div>
          <div class="column">
            <img src="./static/images/tom_jerry_prune/frame_${frameNumber}.png" class="interpolation-image">
          </div>
        </div>
      `;
    }
    
    if (slider && wrapper) {
      // Set initial image
      updateImage(0);
      
      // Update image when slider moves
      slider.addEventListener('input', function(e) {
        updateImage(e.target.value);
      });
    }

    bulmaSlider.attach();

    // Initialize carousel videos
    const carouselVideos = document.querySelectorAll('.carousel-video');
    carouselVideos.forEach(video => {
      // Set playback rate to complete in 10 seconds (66 frames at 1fps = 6.6x speed)
      video.playbackRate = 6.6;
    });

    // Initialize carousel answer loading animations
    initializeCarouselLoading();

    // Interactive Performance Table functionality
    initializePerformanceTable();
});

// Performance Table functionality
let sortDirection = {};
let performanceData = [];

// Model size mapping
const modelSizes = {
    'Llava-Video': ['7B', '72B'],
    'NVILA': ['2B', '8B', '15B'],
    'MiniCPM-V': ['8B']
};

function initializePerformanceTable() {
    // Load CSV data
    loadCSVData();
    
    // Setup filter event listeners
    document.getElementById('modelFilter').addEventListener('change', handleModelChange);
    document.getElementById('sizeFilter').addEventListener('change', filterTable);
    
    // Initialize sort directions
    const headers = document.querySelectorAll('#performanceTable th[onclick*="sortTable"]');
    headers.forEach((header, index) => {
        sortDirection[index] = 'asc';
    });
}

function loadCSVData() {
    fetch('./static/data/performance_results.csv')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(csvText => {
            performanceData = parseCSV(csvText);
            populateTable(performanceData);
        })
        .catch(error => {
            console.error('Error loading CSV data:', error);
            if (typeof embeddedCSVData !== 'undefined') {
                performanceData = parseCSV(embeddedCSVData.replace(/\\n/g, '\n'));
                populateTable(performanceData);
            } else {
                document.getElementById('performanceTableBody').innerHTML = '<tr><td colspan="16">Failed to load performance data</td></tr>';
            }
        });
}

function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const row = {};
        headers.forEach((header, index) => {
            row[header] = values[index];
        });
        data.push(row);
    }
    
    return data;
}

function populateTable(data) {
    const tbody = document.getElementById('performanceTableBody');
    tbody.innerHTML = '';
    
    // Define metric columns (excluding sticky columns)
    const metricColumns = [
        'VideoNIAH_Avg', 'VideoNIAH_Edit', 'VideoNIAH_Insert1', 'VideoNIAH_Insert2',
        'NExT-QA_Avg', 'NExT-QA_MC', 'NExT-QA_OE',
        'VideoMME_Avg', 'VideoMME_wo_sub', 'VideoMME_w_sub',
        'EgoSchema', 'MVBench', 'Average'
    ];
    
    // Group data by model and size
    const modelSizeGroups = {};
    data.forEach(row => {
        const key = `${row.Model}-${row.Size}`;
        if (!modelSizeGroups[key]) {
            modelSizeGroups[key] = [];
        }
        modelSizeGroups[key].push(row);
    });
    
    // Find best compression method for each model-size combination (excluding Original)
    const bestCompressionMethods = {};
    Object.keys(modelSizeGroups).forEach(key => {
        const group = modelSizeGroups[key];
        const compressionMethods = group.filter(row => row.Method !== 'Original');
        
        if (compressionMethods.length > 0) {
            let bestRow = compressionMethods[0];
            let bestAverage = parseFloat(bestRow.Average) || 0;
            
            compressionMethods.forEach(row => {
                const average = parseFloat(row.Average) || 0;
                if (average > bestAverage) {
                    bestAverage = average;
                    bestRow = row;
                }
            });
            
            bestCompressionMethods[key] = bestRow.Method;
        }
    });
    
    // Find best scores for each column within each model-size group (excluding Original)
    const bestScores = {};
    Object.keys(modelSizeGroups).forEach(key => {
        const group = modelSizeGroups[key];
        const compressionMethods = group.filter(row => row.Method !== 'Original');
        bestScores[key] = {};
        
        metricColumns.forEach(column => {
            let bestScore = -Infinity;
            compressionMethods.forEach(row => {
                const score = parseFloat(row[column]) || 0;
                if (score > bestScore) {
                    bestScore = score;
                }
            });
            bestScores[key][column] = bestScore;
        });
    });
    
    data.forEach(row => {
        const tr = document.createElement('tr');
        tr.setAttribute('data-model', row.Model);
        tr.setAttribute('data-size', row.Size);
        tr.setAttribute('data-method', row.Method);
        
        const modelSizeKey = `${row.Model}-${row.Size}`;
        const isBestCompressionMethod = bestCompressionMethods[modelSizeKey] === row.Method;
        
        // Add best-result class for best compression method (blue shade)
        if (isBestCompressionMethod) {
            tr.classList.add('best-result');
        }
        
        // Check which cells should have best-score styling (exclude Original from getting blue text)
        const isOriginal = row.Method === 'Original';
        const isBestVideoNIAH = !isOriginal && parseFloat(row.VideoNIAH_Avg) === bestScores[modelSizeKey]['VideoNIAH_Avg'];
        const isBestVideoNIAHEdit = !isOriginal && parseFloat(row.VideoNIAH_Edit) === bestScores[modelSizeKey]['VideoNIAH_Edit'];
        const isBestVideoNIAHInsert1 = !isOriginal && parseFloat(row.VideoNIAH_Insert1) === bestScores[modelSizeKey]['VideoNIAH_Insert1'];
        const isBestVideoNIAHInsert2 = !isOriginal && parseFloat(row.VideoNIAH_Insert2) === bestScores[modelSizeKey]['VideoNIAH_Insert2'];
        const isBestNextQA = !isOriginal && parseFloat(row['NExT-QA_Avg']) === bestScores[modelSizeKey]['NExT-QA_Avg'];
        const isBestNextQAMC = !isOriginal && parseFloat(row['NExT-QA_MC']) === bestScores[modelSizeKey]['NExT-QA_MC'];
        const isBestNextQAOE = !isOriginal && parseFloat(row['NExT-QA_OE']) === bestScores[modelSizeKey]['NExT-QA_OE'];
        const isBestVideoMME = !isOriginal && parseFloat(row.VideoMME_Avg) === bestScores[modelSizeKey]['VideoMME_Avg'];
        const isBestVideoMMEWoSub = !isOriginal && parseFloat(row.VideoMME_wo_sub) === bestScores[modelSizeKey]['VideoMME_wo_sub'];
        const isBestVideoMMEWSub = !isOriginal && parseFloat(row.VideoMME_w_sub) === bestScores[modelSizeKey]['VideoMME_w_sub'];
        const isBestEgoSchema = !isOriginal && parseFloat(row.EgoSchema) === bestScores[modelSizeKey]['EgoSchema'];
        const isBestMVBench = !isOriginal && parseFloat(row.MVBench) === bestScores[modelSizeKey]['MVBench'];
        const isBestAverage = !isOriginal && parseFloat(row.Average) === bestScores[modelSizeKey]['Average'];
        
        tr.innerHTML = `
            <td class="sticky-col"><strong>${row.Model}</strong></td>
            <td class="sticky-col">${row.Size}</td>
            <td class="sticky-col"><span class="method-tag ${row.Method.toLowerCase()}">${row.Method}</span></td>
            <td class="metric-cell benchmark-avg${isBestVideoNIAH ? ' best-score' : ''}" data-benchmark="videoniah">${row.VideoNIAH_Avg}</td>
            <td class="metric-cell videoniah-sub${isBestVideoNIAHEdit ? ' best-score' : ''}" style="display: none;">${row.VideoNIAH_Edit}</td>
            <td class="metric-cell videoniah-sub${isBestVideoNIAHInsert1 ? ' best-score' : ''}" style="display: none;">${row.VideoNIAH_Insert1}</td>
            <td class="metric-cell videoniah-sub${isBestVideoNIAHInsert2 ? ' best-score' : ''}" style="display: none;">${row.VideoNIAH_Insert2}</td>
            <td class="metric-cell benchmark-avg${isBestNextQA ? ' best-score' : ''}" data-benchmark="nextqa">${row['NExT-QA_Avg']}</td>
            <td class="metric-cell nextqa-sub${isBestNextQAMC ? ' best-score' : ''}" style="display: none;">${row['NExT-QA_MC']}</td>
            <td class="metric-cell nextqa-sub${isBestNextQAOE ? ' best-score' : ''}" style="display: none;">${row['NExT-QA_OE']}</td>
            <td class="metric-cell benchmark-avg${isBestVideoMME ? ' best-score' : ''}" data-benchmark="videomme">${row.VideoMME_Avg}</td>
            <td class="metric-cell videomme-sub${isBestVideoMMEWoSub ? ' best-score' : ''}" style="display: none;">${row.VideoMME_wo_sub}</td>
            <td class="metric-cell videomme-sub${isBestVideoMMEWSub ? ' best-score' : ''}" style="display: none;">${row.VideoMME_w_sub}</td>
            <td class="metric-cell${isBestEgoSchema ? ' best-score' : ''}">${row.EgoSchema}</td>
            <td class="metric-cell${isBestMVBench ? ' best-score' : ''}">${row.MVBench}</td>
            <td class="metric-cell average-cell${isBestAverage ? ' best-score' : ''}">${row.Average}</td>
        `;
        
        tbody.appendChild(tr);
    });
}

function handleModelChange() {
    const modelFilter = document.getElementById('modelFilter');
    const sizeFilter = document.getElementById('sizeFilter');
    const selectedModel = modelFilter.value;
    
    // Clear size filter
    sizeFilter.innerHTML = '';
    
    if (selectedModel === '') {
        // No model selected - disable size filter
        sizeFilter.disabled = true;
        sizeFilter.innerHTML = '<option value="">Select a model family first</option>';
    } else {
        // Enable size filter and populate with sizes for selected model
        sizeFilter.disabled = false;
        sizeFilter.innerHTML = '<option value="">All Sizes</option>';
        
        if (modelSizes[selectedModel]) {
            modelSizes[selectedModel].forEach(size => {
                const option = document.createElement('option');
                option.value = size;
                option.textContent = size;
                sizeFilter.appendChild(option);
            });
        }
    }
    
    // Apply filters
    filterTable();
}

function filterTable() {
    const modelFilter = document.getElementById('modelFilter').value;
    const sizeFilter = document.getElementById('sizeFilter').value;
    const table = document.getElementById('performanceTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const model = row.getAttribute('data-model');
        const size = row.getAttribute('data-size');
        
        let showRow = true;
        
        if (modelFilter && model !== modelFilter) {
            showRow = false;
        }
        
        if (sizeFilter && size !== sizeFilter) {
            showRow = false;
        }
        
        row.style.display = showRow ? '' : 'none';
    }
    
    // Add highlight animation to visible rows
    setTimeout(() => {
        const visibleRows = Array.from(rows).filter(row => row.style.display !== 'none');
        visibleRows.forEach(row => {
            row.classList.add('performance-highlight');
            setTimeout(() => row.classList.remove('performance-highlight'), 1000);
        });
    }, 100);
}

function sortTable(columnIndex) {
    // Define column mappings to data fields (matching sortTable onclick indices only)
    const columnMappings = [
        'Model',           // 0
        'Size',            // 1  
        'Method',          // 2
        'VideoNIAH_Edit',  // 3 - VideoNIAH Edit (sub)
        'VideoNIAH_Insert1', // 4 - VideoNIAH Insert1 (sub)
        'VideoNIAH_Insert2', // 5 - VideoNIAH Insert2 (sub)
        'NExT-QA_MC',      // 6 - NExT-QA MC (sub)
        'NExT-QA_OE',      // 7 - NExT-QA OE (sub)
        'VideoMME_wo_sub', // 8 - VideoMME w/o sub (sub)
        'VideoMME_w_sub',  // 9 - VideoMME w/ sub (sub)
        'EgoSchema',       // 10 - EgoSchema
        'MVBench',         // 11 - MVBench
        'Average'          // 12 - Average
    ];
    
    const dataField = columnMappings[columnIndex];
    if (!dataField) {
        console.error('Invalid column index:', columnIndex);
        return;
    }
    
    const table = document.getElementById('performanceTable');
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = Array.from(tbody.getElementsByTagName('tr'));
    
    // Clear previous sort indicators from all headers
    const allHeaders = table.querySelectorAll('th');
    allHeaders.forEach(header => {
        header.classList.remove('sort-asc', 'sort-desc');
    });
    
    // Toggle sort direction
    const currentDirection = sortDirection[columnIndex] || 'asc';
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
    sortDirection[columnIndex] = newDirection;
    
    // Find and update the correct header element using onclick attribute
    const targetHeader = table.querySelector(`th[onclick="sortTable(${columnIndex})"]`);
    if (targetHeader) {
        targetHeader.classList.add(newDirection === 'asc' ? 'sort-asc' : 'sort-desc');
    }
    
    // Sort rows based on data attributes
    rows.sort((a, b) => {
        const modelA = a.getAttribute('data-model');
        const sizeA = a.getAttribute('data-size');
        const methodA = a.getAttribute('data-method');
        
        const modelB = b.getAttribute('data-model');
        const sizeB = b.getAttribute('data-size');
        const methodB = b.getAttribute('data-method');
        
        // Find the corresponding data rows
        const rowDataA = performanceData.find(row => 
            row.Model === modelA && row.Size === sizeA && row.Method === methodA
        );
        const rowDataB = performanceData.find(row => 
            row.Model === modelB && row.Size === sizeB && row.Method === methodB
        );
        
        if (!rowDataA || !rowDataB) {
            return 0;
        }
        
        let aValue = rowDataA[dataField];
        let bValue = rowDataB[dataField];
        
        // Handle numeric values (columns 3 and above are metrics)
        if (columnIndex >= 3) {
            aValue = parseFloat(aValue);
            bValue = parseFloat(bValue);
            
            // Handle NaN values
            if (isNaN(aValue)) aValue = 0;
            if (isNaN(bValue)) bValue = 0;
        } else {
            // For text values, convert to string for comparison
            aValue = String(aValue || '').toLowerCase();
            bValue = String(bValue || '').toLowerCase();
        }
        
        // Compare values
        if (aValue < bValue) {
            return newDirection === 'asc' ? -1 : 1;
        } else if (aValue > bValue) {
            return newDirection === 'asc' ? 1 : -1;
        }
        return 0;
    });
    
    // Add loading state
    table.classList.add('table-loading');
    
    // Reorder rows with animation
    setTimeout(() => {
        rows.forEach(row => tbody.appendChild(row));
        table.classList.remove('table-loading');
        
        // Add highlight animation to sorted rows
        rows.forEach((row, index) => {
            setTimeout(() => {
                if (row.style.display !== 'none') {
                    row.classList.add('performance-highlight');
                    setTimeout(() => row.classList.remove('performance-highlight'), 1000);
                }
            }, index * 50);
        });
    }, 200);
}

function toggleBenchmark(benchmarkName) {
    const header = document.getElementById(benchmarkName + '-header');
    const expandIcon = header.querySelector('.expand-icon');
    const subCols = document.querySelectorAll('.' + benchmarkName + '-sub');
    
    const isExpanded = expandIcon.classList.contains('fa-chevron-left');
    
    if (isExpanded) {
        // Collapse: hide subcategories, keep averages
        expandIcon.classList.remove('fa-chevron-left');
        expandIcon.classList.add('fa-chevron-right');
        
        // Hide subcategory headers
        subCols.forEach(col => {
            col.style.display = 'none';
        });
        
        // Keep the main benchmark header visible
        header.style.display = '';
        
        // Keep corresponding average cells visible
        const avgCells = document.querySelectorAll(`.benchmark-avg[data-benchmark="${benchmarkName}"]`);
        avgCells.forEach(cell => {
            cell.style.display = '';
        });
        
        // Hide all subcategory data cells
        const subDataCells = document.querySelectorAll(`td.${benchmarkName}-sub`);
        subDataCells.forEach(cell => {
            cell.style.display = 'none';
        });
    } else {
        // Expand: show subcategories, keep averages
        expandIcon.classList.remove('fa-chevron-right');
        expandIcon.classList.add('fa-chevron-left');
        
        // Show subcategory headers
        subCols.forEach(col => {
            col.style.display = '';
        });
        
        // Keep the main benchmark header visible
        header.style.display = '';
        
        // Keep corresponding average cells visible
        const avgCells = document.querySelectorAll(`.benchmark-avg[data-benchmark="${benchmarkName}"]`);
        avgCells.forEach(cell => {
            cell.style.display = '';
        });
        
        // Show all subcategory data cells
        const subDataCells = document.querySelectorAll(`td.${benchmarkName}-sub`);
        subDataCells.forEach(cell => {
            cell.style.display = '';
        });
    }
}

function resetTable() {
    // Reset filters
    document.getElementById('modelFilter').value = '';
    document.getElementById('sizeFilter').value = '';
    document.getElementById('sizeFilter').disabled = true;
    document.getElementById('sizeFilter').innerHTML = '<option value="">Select a model family first</option>';
    
    // Reset sort indicators
    const headers = document.querySelectorAll('#performanceTable th');
    headers.forEach(header => {
        header.classList.remove('sort-asc', 'sort-desc');
    });
    
    // Reset sort directions
    Object.keys(sortDirection).forEach(key => {
        sortDirection[key] = 'asc';
    });
    
    // Reset table to original order by repopulating with original data
    populateTable(performanceData);
    
    // Add reset animation
    const table = document.getElementById('performanceTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    
    setTimeout(() => {
        Array.from(rows).forEach((row, index) => {
            setTimeout(() => {
                row.classList.add('performance-highlight');
                setTimeout(() => row.classList.remove('performance-highlight'), 1000);
            }, index * 30);
        });
    }, 100);
}

// Carousel loading animation functionality
function initializeCarouselLoading() {
    // First, ensure all loading elements are visible and content is hidden
    for (let i = 0; i < 3; i++) {
        const originalLoading = document.getElementById(`original-loading-${i}`);
        const originalContent = document.getElementById(`original-content-${i}`);
        const framefusionLoading = document.getElementById(`framefusion-loading-${i}`);
        const framefusionContent = document.getElementById(`framefusion-content-${i}`);
        const originalTimer = document.getElementById(`original-time-${i}`);
        const framefusionTimer = document.getElementById(`framefusion-time-${i}`);
        
        if (originalLoading) originalLoading.style.display = 'flex';
        if (originalContent) {
            originalContent.style.display = 'none';
            originalContent.classList.remove('loaded');
        }
        if (framefusionLoading) framefusionLoading.style.display = 'flex';
        if (framefusionContent) {
            framefusionContent.style.display = 'none';
            framefusionContent.classList.remove('loaded');
        }
        
        // Reset timers
        if (originalTimer) originalTimer.textContent = '0.0s';
        if (framefusionTimer) framefusionTimer.textContent = '0.0s';
        
        // Reset progress bars
        const originalProgress = originalLoading?.querySelector('.loading-progress-bar');
        const framefusionProgress = framefusionLoading?.querySelector('.loading-progress-bar');
        if (originalProgress) {
            originalProgress.style.width = '0%';
            originalProgress.style.transition = 'none';
        }
        if (framefusionProgress) {
            framefusionProgress.style.width = '0%';
            framefusionProgress.style.transition = 'none';
        }
    }

    // Token counts for each carousel item (Original, FrameFusion)
    const tokenData = [
        { original: 13440, framefusion: 4032 },
        { original: 10290, framefusion: 3087 },
        { original: 9870, framefusion: 2961 }
    ];

    // Base timing constants
    const BASE_DELAY = 500; // Base delay before starting (same for both)
    const TOKEN_FACTOR = 0.25; // Milliseconds per token (increased for more noticeable difference)
    const MIN_DELAY = 500; // Minimum delay in milliseconds
    const MAX_DELAY = 4000; // Maximum delay in milliseconds

    // Calculate delays for each carousel item
    tokenData.forEach((tokens, index) => {
        // Calculate proportional delays based on token count
        const originalDelay = Math.min(Math.max(tokens.original * TOKEN_FACTOR, MIN_DELAY), MAX_DELAY);
        const framefusionDelay = Math.min(Math.max(tokens.framefusion * TOKEN_FACTOR, MIN_DELAY), MAX_DELAY);

        // Log the timing for debugging
        console.log(`Carousel ${index}: Original ${tokens.original} tokens = ${originalDelay}ms, FrameFusion ${tokens.framefusion} tokens = ${framefusionDelay}ms`);

        // Start both animations at the same time (after BASE_DELAY)
        setTimeout(() => {
            // Animate progress bar for Original
            animateProgressBar(`original-loading-${index}`, originalDelay);
            
            // Animate progress bar for FrameFusion
            animateProgressBar(`framefusion-loading-${index}`, framefusionDelay);
            
            // Start timers for both
            startTimer(`original-time-${index}`, originalDelay);
            startTimer(`framefusion-time-${index}`, framefusionDelay);
        }, BASE_DELAY);

        // Complete Original loading after its delay
        setTimeout(() => {
            const loadingElement = document.getElementById(`original-loading-${index}`);
            const contentElement = document.getElementById(`original-content-${index}`);
            
            if (loadingElement && contentElement) {
                // Hide loading, show content
                loadingElement.style.display = 'none';
                contentElement.style.display = 'flex';
                contentElement.classList.add('loaded');
            }
        }, BASE_DELAY + originalDelay);

        // Complete FrameFusion loading after its delay (much shorter)
        setTimeout(() => {
            const loadingElement = document.getElementById(`framefusion-loading-${index}`);
            const contentElement = document.getElementById(`framefusion-content-${index}`);
            
            if (loadingElement && contentElement) {
                // Hide loading, show content
                loadingElement.style.display = 'none';
                contentElement.style.display = 'flex';
                contentElement.classList.add('loaded');
            }
        }, BASE_DELAY + framefusionDelay);
    });

    // Reset animation when carousel slides change
    const carousel = document.getElementById('results-carousel');
    if (carousel) {
        // Listen for carousel slide changes (if bulma carousel provides events)
        // For now, we'll reset on any interaction
        carousel.addEventListener('click', () => {
            // Reset all loading states
            resetCarouselLoading();
        });
    }
}

function animateProgressBar(loadingId, duration) {
    const loadingElement = document.getElementById(loadingId);
    if (!loadingElement) return;

    const progressBar = loadingElement.querySelector('.loading-progress-bar');
    if (!progressBar) return;

    // Reset progress bar
    progressBar.style.width = '0%';
    progressBar.style.transition = 'none';

    // Force reflow to ensure the reset takes effect
    progressBar.offsetHeight;

    // Start progress animation immediately
    progressBar.style.transition = `width ${duration}ms linear`;
    progressBar.style.width = '100%';
}

function startTimer(timerId, duration) {
    const timerElement = document.getElementById(timerId);
    if (!timerElement) return;

    const startTime = Date.now();
    const endTime = startTime + duration;
    
    // Store interval ID for cleanup
    const intervalId = setInterval(() => {
        const currentTime = Date.now();
        const elapsed = (currentTime - startTime) / 1000;
        
        if (currentTime >= endTime) {
            timerElement.textContent = `${(duration / 1000).toFixed(1)}s`;
            clearInterval(intervalId);
        } else {
            timerElement.textContent = `${elapsed.toFixed(1)}s`;
        }
    }, 100);
    
    // Store interval ID for cleanup during reset
    timerElement.dataset.intervalId = intervalId;
}

function resetCarouselLoading() {
    // Reset all loading and content elements
    for (let i = 0; i < 3; i++) {
        const originalLoading = document.getElementById(`original-loading-${i}`);
        const originalContent = document.getElementById(`original-content-${i}`);
        const framefusionLoading = document.getElementById(`framefusion-loading-${i}`);
        const framefusionContent = document.getElementById(`framefusion-content-${i}`);
        const originalTimer = document.getElementById(`original-time-${i}`);
        const framefusionTimer = document.getElementById(`framefusion-time-${i}`);

        if (originalLoading && originalContent) {
            originalLoading.style.display = 'flex';
            originalContent.style.display = 'none';
            originalContent.classList.remove('loaded');
            
            // Reset progress bar
            const originalProgress = originalLoading.querySelector('.loading-progress-bar');
            if (originalProgress) {
                originalProgress.style.width = '0%';
                originalProgress.style.transition = 'none';
            }
        }

        if (framefusionLoading && framefusionContent) {
            framefusionLoading.style.display = 'flex';
            framefusionContent.style.display = 'none';
            framefusionContent.classList.remove('loaded');
            
            // Reset progress bar
            const framefusionProgress = framefusionLoading.querySelector('.loading-progress-bar');
            if (framefusionProgress) {
                framefusionProgress.style.width = '0%';
                framefusionProgress.style.transition = 'none';
            }
        }

        // Clear and reset timers
        if (originalTimer) {
            if (originalTimer.dataset.intervalId) {
                clearInterval(originalTimer.dataset.intervalId);
            }
            originalTimer.textContent = '0.0s';
        }

        if (framefusionTimer) {
            if (framefusionTimer.dataset.intervalId) {
                clearInterval(framefusionTimer.dataset.intervalId);
            }
            framefusionTimer.textContent = '0.0s';
        }
    }

    // Re-initialize after a short delay
    setTimeout(() => {
        initializeCarouselLoading();
    }, 100);
}
